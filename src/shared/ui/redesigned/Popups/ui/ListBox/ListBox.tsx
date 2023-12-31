import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from '@/shared/types/dropdownDirection/dropdownDirection';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    showArrow?: boolean;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
        showArrow = true,
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    const selectedItemContent = useMemo(
        () => items?.filter((item) => item?.value === value)[0]?.content,
        [items, value],
    );

    return (
        <HStack gap='24' align='center'>
            {label && (
                <span
                    className={classNames('', { [cls.readonly]: readonly })}
                >{`${label}`}</span>
            )}
            <HListBox
                disabled={readonly}
                as='div'
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                {/* <HListBox.Button */}
                {/*    as={Button} */}
                {/*    variant='filled' // @ts-ignore */}
                {/*    disabled={readonly} */}
                {/*    addonRight={showArrow ? <Icon Svg={ArrowIcon} /> : null} */}
                {/*    className={cls.trigger} */}
                {/* > */}
                <HListBox.Button className={cls.trigger}>
                    <Button
                        variant='filled'
                        as='span'
                        disabled={readonly}
                        addonRight={showArrow ? <Icon Svg={ArrowIcon} /> : null}
                    >
                        {selectedItemContent ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.selected]: selected,
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
