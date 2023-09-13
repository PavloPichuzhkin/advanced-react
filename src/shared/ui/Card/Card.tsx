import {
    CSSProperties, HTMLAttributes, memo, ReactNode, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    border?: string;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        border,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        borderRadius: border || '8px',
    }), [border]);

    return (
        <div
            style={styles}
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
