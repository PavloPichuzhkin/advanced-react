import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/SidebarItemsList';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    // const [test, setTest] = useState(0);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    ));

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '\u003e' : '\u003c'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
