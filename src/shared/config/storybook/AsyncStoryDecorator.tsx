import { StoryFn } from '@storybook/react';
import createAsyncCallback from '@loki/create-async-callback';
import isLokiRunning from '@loki/is-loki-running';

// const AsyncStoryDecorator = (Story: StoryFn) => {
//     createAsyncCallback();
//     return <Story />;
// };

const DELAY = 60;
/**
 * Makes a delay between capturing a screenshot. Useful when you need to wait until some async actions are done or image is loaded.
 * @param delay - Delay in milliseconds.
 * @default 60
 */

const AsyncStoryDecorator = (delay = DELAY) => (StoryComponent: StoryFn) => {
    const onDone = createAsyncCallback();

    if (isLokiRunning()) {
        setTimeout(() => {
            onDone();
        }, delay);
    }

    return <StoryComponent />;
};
export default AsyncStoryDecorator;
