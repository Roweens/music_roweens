import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { memo, ReactNode } from 'react';
import cls from './NextLink.module.scss';

interface nextLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
    Icon?: any;
}

export const NextLink = memo((props: nextLinkProps) => {
    const { className = '', children, href, Icon, ...otherProps } = props;

    return (
        <Link className={classNames(cls.nextLink, cls[className])} href={href} {...otherProps}>
            {Icon && <Icon fill="var(--secondary-color)" />}
            {children}
        </Link>
    );
});
