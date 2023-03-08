import classNames from 'classnames';
import { FC } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { Switch } from '@/shared/ui/Switch/Switch';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { toggleTheme, theme } = useTheme();

    const onThemeToggle = () => {
        toggleTheme();
    };

    return (
        <div className={classNames(cls.themeSwitcher, {}, [className])}>
            <Switch checked={theme === 'dark'} name="theme" onClick={onThemeToggle} options={['Dk', 'Lht']} />
        </div>
    );
};
