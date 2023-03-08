import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import cls from './Navbar.module.scss';
import { UserMenu } from '@/widgets/UserMenu';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import BackArrow from '../assets/backArrow.svg';
import NextArrow from '../assets/nextArrow.svg';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.controls}>
                <Button theme={ButtonTheme.CLEAN} className={cls.button}><BackArrow /></Button>
                <Button theme={ButtonTheme.CLEAN}><NextArrow /></Button>
            </div>
            <UserMenu username="Cognus" />
        </div>
    );
};
