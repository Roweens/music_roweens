import classNames from 'classnames';
import { FC } from 'react';
import HomeIcon from '@/../../public/home.svg';
import SearchIcon from '@/../../public/search.svg';
import AlbumIcon from '@/../../public/album.svg';
import PlusIcon from '@/../../public/plus.svg';
import HeartIcon from '@/../../public/heart.svg';
import { useTranslation } from 'next-i18next';
import { NextLink } from '@/shared/ui/NextLink/NextLink';
import cls from './SideBar.module.scss';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('sidebar');

    return (
        <div className={classNames(cls.sideBar, {}, className)} data-testid="sidebar">
            <NextLink href="/" Icon={HomeIcon}>
                {t('Главная')}
            </NextLink>
            <NextLink href="/tracks" Icon={SearchIcon}>
                {t('Поиск')}
            </NextLink>
            <NextLink href="/tracks" Icon={AlbumIcon}>
                {t('Мои альбомы')}
            </NextLink>
            <NextLink href="/tracks" Icon={PlusIcon} className="separated">
                {t('Создать плейлист')}
            </NextLink>
            <NextLink href="/tracks" Icon={HeartIcon}>
                {t('Избранные треки')}
            </NextLink>
            <div className={cls.switchers}>

                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
};
