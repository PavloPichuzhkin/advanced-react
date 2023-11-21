import { StoryFn } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: StoryFn) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
