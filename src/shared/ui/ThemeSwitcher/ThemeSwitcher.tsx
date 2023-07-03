import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {Theme} from "shared/lib/context/ThemeContext";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon fill={'#000'} /> : <LightIcon />}
        </Button>
    );
};
