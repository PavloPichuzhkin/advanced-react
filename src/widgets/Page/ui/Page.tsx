import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';
import { DataTestId } from '@/shared/types';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { useScrollPosition } from '@/shared/lib/hooks/useScrollPosition/useScrollPosition';

interface PageProps extends DataTestId {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { wrapperRef, onScroll } = useScrollPosition(300);
    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    });

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
                        className={classNames(cls.Page, {}, [className])}
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
