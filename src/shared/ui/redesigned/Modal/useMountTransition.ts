import { useEffect, useRef, useState } from 'react';

export const useMountTransition = (
    isMounted?: boolean | undefined,
    unmountDelay?: number | undefined,
) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        } else if (!isMounted && hasTransitionedIn) {
            timerRef.current = setTimeout(
                () => setHasTransitionedIn(false),
                unmountDelay,
            );
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [unmountDelay, isMounted, hasTransitionedIn]);

    return hasTransitionedIn;
};
