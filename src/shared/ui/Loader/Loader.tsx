import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Loader = ({ className, style }: LoaderProps) => (
    <div className={classNames(cls.ldsEllipsis, {}, [className])} style={style}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
