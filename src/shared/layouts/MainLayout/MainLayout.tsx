import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './MainLayout.module.scss';
import { useScrollPosition } from '@/shared/lib/hooks/useScrollPosition/useScrollPosition';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, toolbar, header, sidebar } = props;

    const { wrapperRef, onScroll } = useScrollPosition(100);

    return (
        <div
            id='scroller'
            className={classNames(cls.MainLayout, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
        >
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
