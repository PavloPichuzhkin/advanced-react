import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

// eslint-disable-next-line operator-linebreak
export const Select =
    // memo(
    <T extends string>(props: SelectProps<T>) => {
        const { className, label, options, onChange, value, readonly } = props;

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value as T);
            }
        };

        const optionsList = useMemo(
            () =>
                options?.map((opt) => (
                    <option
                        className={cls.option}
                        value={opt.value}
                        key={opt.value}
                    >
                        {opt.content}
                    </option>
                )),
            [options],
        );

        const mods: Mods = {
            [cls.readonly]: readonly,
        };
        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}/>`}</span>}
                <select
                    disabled={readonly}
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </div>
        );
    };
// );
