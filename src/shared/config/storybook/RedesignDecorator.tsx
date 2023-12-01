import { StoryFn } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const RedesignDecorator = (StoryComponent: StoryFn) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className='app_redesigned'>
            <StoryComponent />
        </div>
    );
};
