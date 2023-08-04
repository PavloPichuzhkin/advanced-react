import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/lib/context/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme | undefined
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        let newTheme: Theme;
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.DANGER;
            break;
        case Theme.DANGER:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}
