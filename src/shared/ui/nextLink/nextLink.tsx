import classNames from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import cls from './nextLink.module.scss';

interface nextLinkProps {
    children: ReactNode;
    href: string;
    className?: string;
    Icon?: any;
}

export const NextLink: FC<nextLinkProps> = (props) => {
    const { className = '', children, href, Icon } = props;

    return (
        <Link className={classNames(cls.nextLink, cls[className])} href={href}>
            {Icon && <Icon fill="var(--secondary-color)" />}
            {children}
        </Link>
    );
};
