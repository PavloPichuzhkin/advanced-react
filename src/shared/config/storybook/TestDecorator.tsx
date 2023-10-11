import { StoryFn } from '@storybook/react';

export const TestDecorator =
    (testText: string) => (StoryComponent: StoryFn) => {
        console.log(testText);
        return <StoryComponent />;
    };
