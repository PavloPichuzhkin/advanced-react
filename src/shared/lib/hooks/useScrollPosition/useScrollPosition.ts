import {
    MutableRefObject,
    UIEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import {
    getScrollPositionByPath,
    scrollPositionActions,
} from '@/features/ScrollPositionStorage';
import { useThrottle } from '../useThrottle/useThrottle';

interface ScrollPositionResult {
    wrapperRef: MutableRefObject<HTMLDivElement>;
    onScroll: () => void;
}

export const useScrollPosition = (delay: number): ScrollPositionResult => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname),
    );

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollPositionActions.setScrollPosition({
                position: Math.round(e.currentTarget.scrollTop),
                path: pathname,
            }),
        );
    }, delay);

    return useMemo(() => {
        return { wrapperRef, onScroll };
    }, [onScroll]);
};
