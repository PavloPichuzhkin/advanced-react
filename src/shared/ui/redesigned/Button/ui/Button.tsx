import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    memo,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;

    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;

    as?: 'span'; // only for headless ui
}

// export const Button = forwardRef(
//     (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        color = 'normal',

        square,
        disabled,
        fullWidth,
        size = 'm',
        as,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),

        // [cls.spanDisable]: Boolean(as),
    };

    if (as) {
        return (
            <span
                role='button'
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                {...otherProps}
            >
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                {children}
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </span>
        );
    }
    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[color],
                cls[size],
            ])}
            disabled={disabled}
            // ref={ref}
            {...otherProps}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            {children}
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </button>
    );
});
