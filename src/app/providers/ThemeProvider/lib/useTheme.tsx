import { useContext } from 'react';
import { ThemeContext, Themes } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const updatedTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        if (setTheme) setTheme(updatedTheme);
    };

    return { theme, toggleTheme };
};
