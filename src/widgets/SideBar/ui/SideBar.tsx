import classNames from 'classnames';
import { FC } from 'react';
import HomeIcon from '@/../../public/home.svg';
import SearchIcon from '@/../../public/search.svg';
import AlbumIcon from '@/../../public/album.svg';
import PlusIcon from '@/../../public/plus.svg';
import HeartIcon from '@/../../public/heart.svg';
import { NextLink } from '@/shared/ui/nextLink/nextLink';
import cls from './SideBar.module.scss';
import { DropDown } from '@/shared/ui/dropDown/dropDown';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.sideBar, {}, className)}>
            <NextLink href="/tracks" Icon={HomeIcon}>
                Главная
            </NextLink>
            <NextLink href="/tracks" Icon={SearchIcon}>
                Поиск
            </NextLink>
            <NextLink href="/tracks" Icon={AlbumIcon}>
                Мои альбомы
            </NextLink>
            <NextLink href="/tracks" Icon={PlusIcon} className="separated">
                Создать плейлист
            </NextLink>
            <NextLink href="/tracks" Icon={HeartIcon}>
                Избранные треки
            </NextLink>
        </div>
    );
};
