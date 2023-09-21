import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/lib/context/ThemeContext';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
