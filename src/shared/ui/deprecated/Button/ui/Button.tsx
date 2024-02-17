import { type ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: string;
    disabled?: boolean;
    fullWidth?: boolean;

    as?: 'div'; // only for headless ui
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled = false,
        size = ButtonSize.M,
        as,
        fullWidth = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.divDisable]: Boolean(as),
        [cls.fullWidth]: fullWidth,
    };
    if (as) {
        return (
            <span
                role='button'
                className={classNames(cls.Button, mods, [
                    className,
                    cls[theme],
                    cls[size],
                ])}
                {...otherProps}
            >
                {children}
            </span>
        );
    }
    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
