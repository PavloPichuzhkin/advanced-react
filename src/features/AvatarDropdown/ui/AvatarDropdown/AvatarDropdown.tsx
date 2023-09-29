import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData, isUserAdmin, isUserManager, isUserSuperAdmin, userActions,
} from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteMain, getRouteProfile } from '@/shared/const/router';

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
                    href: getRouteAdmin(),
                }] : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Sign out'),
                    onClick: onLogout,
                    // disabled: true,
                },
                {
                    content: t('Main page'),
                    href: getRouteMain(),
                    disabled: true,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
