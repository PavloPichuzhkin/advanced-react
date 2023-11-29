import { StoryContext, StoryFn } from '@storybook/react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useGlobals } from '@storybook/preview-api';
import { Theme } from '@/shared/lib/context/ThemeContext';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

const ThemeDecoratorDeprecated =
    (theme: Theme) => (StoryComponent: StoryFn) => {
        const appClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => 'app_redesigned',
            off: () => 'app',
        });

        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`${appClass} ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };

export const withThemeProvider = (
    StoryComponent: StoryFn,
    context: StoryContext,
) => {
    const appClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => 'app_redesigned',
        off: () => 'app',
    });
    const { theme } = context.globals;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`${appClass} ${theme} overflowStory`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};

export const ThemeDecorator =
    (storyTheme?: Theme) =>
    (StoryComponent: StoryFn, context: StoryContext) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isThemeInitedRef = useRef(false) as MutableRefObject<boolean>;

        const {
            globals: { theme: contextTheme },
        } = context;

        const appClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => 'app_redesigned',
            off: () => 'app',
        });

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            isThemeInitedRef.current = true;
        }, [contextTheme]);

        const finalTheme = isThemeInitedRef.current
            ? contextTheme
            : storyTheme || contextTheme;

        console.log(
            'isThemeInitedRef',
            isThemeInitedRef.current,
            'contextTheme:',
            contextTheme,
            'storyTheme:',
            storyTheme,
            'finalTheme:',
            finalTheme,
        );
        return (
            <ThemeProvider initialTheme={finalTheme}>
                <div className={`${appClass} ${finalTheme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };

// https://github.com/oblador/loki/issues/401
export const withStoryOrGlobalTheme =
    (storyTheme: Theme) => (StoryComponent: StoryFn, context: StoryContext) => {
        const isThemeInitedRef = useRef(false) as MutableRefObject<boolean>;
        const [globals, updateGlobals] = useGlobals();
        const {
            globals: { theme },
        } = context;

        const appClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => 'app_redesigned',
            off: () => 'app',
        });

        // console.log(
        //     isThemeInitedRef.current,
        //     'StorybookContextOrStoryTheme',
        //     globals?.theme,
        // );

        if (!isThemeInitedRef.current) {
            isThemeInitedRef.current = true;
            updateGlobals({
                theme: storyTheme,
            });
        }

        return (
            <ThemeProvider initialTheme={theme ?? storyTheme}>
                <div
                    className={`${appClass} ${
                        theme ?? storyTheme
                    } overflowStory`}
                >
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
