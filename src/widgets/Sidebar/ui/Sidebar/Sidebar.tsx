import { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { getSidebarItems } from '../../model/selectors/SidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

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
