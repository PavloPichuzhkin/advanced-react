import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalTransitionProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export const useModalTransition = ({
    onClose,
    isOpen,
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

    useEffect(() => {
        if (isOpen && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [isOpen, hasTransitionedIn]);

    return { hasTransitionedIn, close, isClosing };
};
