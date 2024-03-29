import { StoryContext, StoryFn } from '@storybook/react';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useGlobals } from '@storybook/preview-api';
import { Theme } from '@/shared/lib/context/ThemeContext';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { getToggleFeaturesAppClass } from '@/shared/lib/features';

const ThemeDecoratorDeprecated =
    (theme: Theme) => (StoryComponent: StoryFn) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`${getToggleFeaturesAppClass()} ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };

export const withThemeProvider = (
    StoryComponent: StoryFn,
    context: StoryContext,
) => {
    const { theme } = context.globals;

    return (
        <ThemeProvider initialTheme={theme}>
            <div
                className={`${getToggleFeaturesAppClass()} ${theme} overflowStory`}
            >
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};

export const ThemeDecorator =
    (storyTheme?: Theme) =>
    (StoryComponent: StoryFn, context: StoryContext) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const renderCounterRef = useRef(0) as MutableRefObject<number>;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isThemeInitedRef = useRef(false) as MutableRefObject<boolean>;

        const {
            globals: { theme: contextTheme },
            name,
        } = context;

        renderCounterRef.current += 1;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            isThemeInitedRef.current = true;
        }, [contextTheme]);

        const storyNameTheme = () => {
            if (name.toLowerCase().includes('dark')) return Theme.DARK;
            if (name.toLowerCase().includes('danger')) return Theme.DANGER;

            return Theme.LIGHT;
        };
        const finalTheme =
            renderCounterRef.current > 2 && isThemeInitedRef.current
                ? contextTheme
                : storyTheme || storyNameTheme() || contextTheme;

        // console.log({
        //     renderCounterRef: renderCounterRef.current,
        //     isThemeInitedRef: isThemeInitedRef.current,
        //     contextTheme,
        //     storyTheme,
        //     finalTheme,
        //     AppClass: getToggleFeaturesAppClass(),
        // });

        return (
            <ThemeProvider initialTheme={finalTheme}>
                <div
                    id='app'
                    className={`${getToggleFeaturesAppClass()} ${finalTheme} overflowStory`}
                >
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
                    className={`${getToggleFeaturesAppClass()} ${
                        theme ?? storyTheme
                    } `}
                >
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
