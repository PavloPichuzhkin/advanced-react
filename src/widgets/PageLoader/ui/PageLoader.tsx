import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './PageLoader.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const PageLoader = ({ className, ...otherProps }: PageLoaderProps) => (
    <ToggleFeatures
        feature='isAppRedesigned'
        on={
            <div
                className={classNames(cls.PageLoaderRedesigned, {}, [
                    className,
                ])}
                {...otherProps}
            >
                <Loader />
            </div>
        }
        off={
            <div
                className={classNames(cls.PageLoader, {}, [className])}
                {...otherProps}
            >
                <div className={cls.beneathPageLoader}>
                    <Loader />
                </div>
            </div>
        }
    />
);
