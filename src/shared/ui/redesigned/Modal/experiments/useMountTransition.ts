import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalTransitionProps {
    onClose?: () => void;
    isOpened?: boolean;
    animationDelay: number;
}

export const useModalTransition = ({
    onClose,
    isOpened,
    animationDelay,
}: UseModalTransitionProps) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setHasTransitionedIn(false);
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    // debugger;

    useEffect(() => {
        if (isOpened && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        }
        // else if (!isOpened && hasTransitionedIn) {
        //     timerRef.current = setTimeout(
        //         () => setHasTransitionedIn(false),
        //         animationDelay,
        //     );
        // }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [isOpened, hasTransitionedIn]);

    return { hasTransitionedIn, close, isClosing };
};
