import { StoryContext, StoryFn } from '@storybook/react';
import { MutableRefObject, useRef } from 'react';
import { useGlobals } from '@storybook/preview-api';
import { Theme } from '@/shared/lib/context/ThemeContext';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { toggleFeatures } from '@/shared/lib/features';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
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

export const withStoryOrGlobalTheme =
    (storyTheme: Theme) => (StoryComponent: StoryFn, context: StoryContext) => {
        const isThemeInitedRef = useRef(false) as MutableRefObject<boolean>;
        const [globals, updateGlobals] = useGlobals();

        const appClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => 'app_redesigned',
            off: () => 'app',
        });

        console.log(
            isThemeInitedRef.current,
            'StorybookContextOrStoryTheme',
            globals?.theme,
        );

        // if (storyTheme !== globals?.theme && !isThemeInitedRef.current) {
        if (!isThemeInitedRef.current) {
            isThemeInitedRef.current = true;
            updateGlobals({
                theme: storyTheme,
            });
        }
        // console.log(isThemeInitedRef.current, 'StorybookContextOrStoryTheme');
        return (
            <ThemeProvider initialTheme={globals?.theme}>
                <div className={`${appClass} ${globals?.theme} overflowStory`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
