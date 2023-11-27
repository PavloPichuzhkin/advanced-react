import { StoryFn } from '@storybook/react';
import { getFeatureFlag } from '@/shared/lib/features';

export const TestDecorator =
    (testText: string) => (StoryComponent: StoryFn) => {
        console.log(testText);
        // console.log(getFeatureFlag('isAppRedesigned'));

        return <StoryComponent />;
    };
