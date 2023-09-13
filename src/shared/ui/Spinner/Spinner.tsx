import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={classNames(cls.ldsSpinner, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
