import React, {
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { AppText } from '../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'size'
>;
type LabelWhiteSpace = 'labelWhiteSpaceNowrap' | '';
type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    labelWhiteSpace?: LabelWhiteSpace;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        labelWhiteSpace = '',
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        if (!readonly) {
            setIsFocused(true);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </div>
    );

    if (label) {
        return (
            <HStack max gap='8' align='center'>
                <AppText
                    text={label}
                    className={classNames('', {}, [cls[labelWhiteSpace]])}
                />
                {input}
            </HStack>
        );
    }

    return input;
});
