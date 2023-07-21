import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreProviderDecorator = (StoryComponent: StoryFn) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
