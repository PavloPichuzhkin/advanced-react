import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
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
        <aside
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
            <VStack role="navigation" gap="4" className={cls.items}>
                {itemsList}
            </VStack>
            <HStack justify="center" max className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </HStack>
        </aside>
    );
};
