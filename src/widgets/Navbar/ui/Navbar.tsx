import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Theme } from 'shared/lib/context/ThemeContext';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const appLinkTheme = Theme.LIGHT === theme ? AppLinkTheme.SECONDARY : AppLinkTheme.PRIMARY;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={appLinkTheme}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Main')}
                </AppLink>
                <AppLink theme={appLinkTheme} to="/about">{t('About us')}</AppLink>
            </div>
        </div>
    );
};
