import { ReactNode, useEffect, useMemo } from 'react';
import { useLocalStorage } from '@/shared/lib/useLocalStorage/useLocalStorage';
import { ThemeContext, Themes } from '../lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Themes,
    children: ReactNode
}

export const ThemeProvider = (props : ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const { returnValue, setReturnValue } = useLocalStorage<Themes>('theme', Themes.DARK);

    useEffect(() => {
        const body = document.querySelector('body');
       body!.id = returnValue === Themes.DARK ? Themes.DARK : Themes.LIGHT;
    }, [returnValue]);

    const ThemeContextDefaultProps = useMemo(() => ({
        theme: initialTheme || returnValue,
        setTheme: setReturnValue,
    }
    ), [returnValue, setReturnValue, initialTheme]);

    return (
        <ThemeContext.Provider value={ThemeContextDefaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
