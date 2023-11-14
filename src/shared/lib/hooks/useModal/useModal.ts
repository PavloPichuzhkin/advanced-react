import {
    MutableRefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;
    const timerRefForOpening = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    // useEffect(() => {
    //     if (isOpen) {
    //         setIsMounted(true);
    //         // setIsOpening(true);
    //         timerRefForOpening.current = setTimeout(
    //             () => setIsOpening(true),
    //             0,
    //         );
    //     }
    // }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            // setIsOpening(true);
            timerRefForOpening.current = setTimeout(
                () => setIsOpening(true),
                0,
            );
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            setIsOpening(false);
            // setIsMounted(false);

            clearTimeout(timerRef.current);
            clearTimeout(timerRefForOpening.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    // debugger;

    return {
        isOpening,
        isClosing,
        isMounted,
        close,
    };
    // return useMemo(() => {
    //     return {
    //         isOpening,
    //         isClosing,
    //         isMounted,
    //         close,
    //     };
    // }, [close, isClosing, isMounted, isOpening]);
}
