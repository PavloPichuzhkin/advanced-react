import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const PageLoader = ({ className, ...otherProps }: PageLoaderProps) => (
    <div
        className={classNames(cls.PageLoader, {}, [className])}
        {...otherProps}
    >
        <div className={cls.beneathPageLoader}>
            <Loader />
        </div>
    </div>
);
