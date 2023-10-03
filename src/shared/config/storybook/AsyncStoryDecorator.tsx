import { StoryContext, StoryFn } from '@storybook/react';
import { MutableRefObject, useEffect, useRef } from 'react';
import isLokiRunning from '@loki/is-loki-running';
import createAsyncCallback from '@loki/create-async-callback';

// const DELAY = 3000;
// /**
//  * Makes a delay between capturing a screenshot. Useful when you need to wait until some async actions are done or image is loaded.
//  * @param delay - Delay in milliseconds.
//  * @default 60
//  */
//
// const AsyncStoryDecorator = (delay = DELAY) => (StoryComponent: StoryFn) => {
//     const onDone = createAsyncCallback();
//
//     if (isLokiRunning()) {
//         setTimeout(() => {
//             onDone();
//         }, delay);
//     }
//
//     return <StoryComponent />;
// };
// export default AsyncStoryDecorator;

const useLokiCaptureDelay = (delay = 0) => {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    useEffect(() => {
        if (isLokiRunning() && delay) {
            const onDone = createAsyncCallback();
            timerRef.current = setTimeout(() => onDone(), delay);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [delay]);
};
export const AsyncStoryDecorator = (StoryComponent: StoryFn, { parameters }: StoryContext) => {
    const { loki } = parameters;
    useLokiCaptureDelay(loki.captureDelay);

    return <StoryComponent />;
};