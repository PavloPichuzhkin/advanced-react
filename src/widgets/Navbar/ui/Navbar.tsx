import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {Theme} from "shared/lib/context/ThemeContext";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {theme} = useTheme()
    const appLinkTheme = Theme.LIGHT === theme ? AppLinkTheme.SECONDARY : AppLinkTheme.PRIMARY

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={appLinkTheme} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={appLinkTheme} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
