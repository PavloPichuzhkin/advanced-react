import { StoryContext, StoryFn } from '@storybook/react';
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

export const DesignSwitcherDecorator = (newDesign?: boolean) =>
    function Decorator(StoryComponent: StoryFn, context: StoryContext) {
        const { title, name } = context;
        // console.log(name);
        setFeatureFlags({
            ...getAllFeatureFlags(),
            isAppRedesigned:
                newDesign === undefined
                    ? (title + name).toLowerCase().includes('redesigned')
                    : newDesign,
        });

        return <StoryComponent />;
    };
