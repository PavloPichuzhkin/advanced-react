import {
    memo,
    MutableRefObject,
    ReactNode,
    Suspense,
    UIEvent,
    useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getScrollPositionByPath,
    scrollPositionActions,
} from '@/features/ScrollPositionStorage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './Page.module.scss';
import { DataTestId } from '@/shared/types';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface PageProps extends DataTestId {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname),
    );
    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollPositionActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 400);

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <>
                    <div className={cls.pageWrapper}>
                        <div className={cls.underPageRedesigned} />
                    </div>
                    <main
                        className={classNames(cls.PageRedesigned, {}, [
                            className,
                        ])}
                        ref={wrapperRef}
                        onScroll={onScroll}
                        id={PAGE_ID}
                        data-testid={props['data-testid'] ?? 'Page'}
                    >
                        {children}
                        {onScrollEnd ? (
                            <div ref={triggerRef} className={cls.triggerRef} />
                        ) : null}
                    </main>
                </>
            }
            off={
                <div className={cls.underPageWrapper}>
                    <main
                        className={classNames(
                            // toggleFeatures({
                            //     name: 'isAppRedesigned',
                            //     on: () => cls.PageRedesigned,
                            //     off: () => cls.Page,
                            // }),
                            cls.Page,
                            {},
                            [className],
                        )}
                        ref={wrapperRef}
                        onScroll={onScroll}
                        id={PAGE_ID}
                        data-testid={props['data-testid'] ?? 'Page'}
                    >
                        {children}
                        {onScrollEnd ? (
                            <div ref={triggerRef} className={cls.triggerRef} />
                        ) : null}
                    </main>
                </div>
            }
        />
    );
});
