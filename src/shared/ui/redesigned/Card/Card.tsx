import { CSSProperties, HTMLAttributes, memo, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'primary' | 'outlined' | 'light';
type CardPadding = '0' | '8' | '16' | '20' | '24';
type CardBorder = 'round' | 'normal';
type CardBorderRadius =
    | '2px'
    | '8px'
    | '12px'
    | '16px'
    | '20px'
    | '24px'
    | '28px'
    | '50%';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    // borderRadius?: CardBorderRadius;
    border?: CardBorder;
    variant?: CardVariant;
    padding?: CardPadding;
    max?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '20': 'padding_20',
    '24': 'padding_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        // borderRadius,
        border = 'normal',
        variant = 'primary',
        padding = '8',
        max,
        ...otherProps
    } = props;

    // const styles = useMemo<CSSProperties>(
    //     () => ({
    //         borderRadius: borderRadius || '8px',
    //     }),
    //     [borderRadius],
    // );

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            // style={styles}
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
