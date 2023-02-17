/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Avatar from '@/../../public/Avatar.jpg';
import DownArrow from '@/../../public/down.svg';
import UpArrow from '@/../../public/up.svg';
import cls from './UserMenu.module.scss';
import { NextLink } from '@/shared/ui/nextLink/nextLink';

interface UserMenuProps {
    className?: string;
    username?: string;
    Icon?: StaticImageData;
}

export const UserMenu: FC<UserMenuProps> = (props) => {
    const [collapsed, isCollapsed] = useState(false);

    const { className, username, Icon = Avatar } = props;

    return (
        <div className={classNames(cls.dropDown, {}, [className])}>
            <div
                className={classNames(cls.dropDownChip, {}, [className])}
                onClick={() => isCollapsed(!collapsed)}
            >
                {Icon && (
                    <Image
                        src={Icon}
                        alt=""
                        width={35}
                        height={35}
                        style={{ borderRadius: '50%' }}
                    />
                )}
                <h5>{username}</h5>
                <DownArrow fill="var(--primary-color)" />
            </div>
            {collapsed && (
                <div className={classNames(cls.dropDownList)}>
                    <ul>
                        <li>
                            <NextLink href="/">Профиль</NextLink>
                        </li>
                        <li>
                            <NextLink href="/">Настройки</NextLink>
                        </li>
                        <li>
                            {' '}
                            <NextLink href="/">Выйти</NextLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
