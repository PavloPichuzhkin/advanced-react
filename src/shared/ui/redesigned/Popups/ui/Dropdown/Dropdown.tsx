import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from '@/shared/types/dropdownDirection/dropdownDirection';
import { mapDirectionClass } from '../../styles/consts';
import { Button } from '../../../Button';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Menu as='div' className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={popupCls.btn}>
                <Button as='span' variant='clear'>
                    {trigger}
                </Button>
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [cls.active]: active,
                                [cls.disabled]: item.disabled,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={Link}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={index}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
