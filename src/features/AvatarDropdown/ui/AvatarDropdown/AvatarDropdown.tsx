import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData, isUserAdmin, isUserManager, isUserSuperAdmin, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isSuperAdmin = useSelector(isUserSuperAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isSuperAdmin || isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Admin panel'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Sign out'),
                    onClick: onLogout,
                    // disabled: true,
                },
                {
                    content: t('Main page'),
                    href: RoutePath.main,
                    disabled: true,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
