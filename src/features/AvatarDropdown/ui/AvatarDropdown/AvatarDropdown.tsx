import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    isUserSuperAdmin,
    userActions,
} from '@/entities/User';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import cls from './AvatarDropdown.module.scss';
import {
    getRouteAdmin,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { CreateArticleButton } from '../../../CreateArticleButton';

interface AvatarDropdownProps {
    className?: string;
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
    const createArticleButton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => ({
            // content: (<div>{t('Main page')}</div>) as ReactNode,
            content: (<CreateArticleButton />) as ReactNode,
        }),
        off: () => ({
            content: null,
        }),
    });

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Admin panel'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Settings'),
            href: getRouteSettings(),
        },
        {
            content: t('Sign out'),
            onClick: onLogout,
        },
        null,
        createArticleButton,

        {
            content: t('Main page'),
            href: getRouteMain(),
            disabled: true,
        },
    ];

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Dropdown
                    direction='bottom left'
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdownDeprecated
                    direction='bottom left'
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            }
        />
    );
});
