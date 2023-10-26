import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getSidebarItems } from '../../model/selectors/SidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );
    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <aside
                    data-testid='sidebar'
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        className={cls.appLogo}
                        // size={collapsed ? 80 : 120}
                        size={140}
                    />
                    <VStack role='navigation' gap='4' className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid='sidebar-toggle'
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <HStack justify='center' max className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </HStack>
                </aside>
            }
            off={
                <aside
                    data-testid='sidebar'
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        onClick={onToggle}
                        data-testid='sidebar-toggle'
                        className={cls.collapseBtn}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? '\u003e' : '\u003c'}
                    </Button>
                    <VStack role='navigation' gap='4' className={cls.items}>
                        {itemsList}
                    </VStack>
                    <HStack justify='center' max className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </HStack>
                </aside>
            }
        />
    );
};
