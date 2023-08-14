import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CSSProperties, HTMLAttributes, memo, ReactNode, useMemo,
} from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    border?:string;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        border,
        ...otherProps
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        borderRadius: border || '8px',
    }), [border]);

    return (
        <div
            style={styles}
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
