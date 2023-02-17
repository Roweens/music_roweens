import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { SideBar } from '@/widgets/SideBar';
import { Player } from '@/widgets/Player';
import cls from './Layout.module.scss';
import { UserMenu } from '@/widgets/UserMenu';

interface LayoutProps {
    className?: string;
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.layout, {}, [className])}>
            <UserMenu username="Cognus" />
            <SideBar />
            {children}
            <Player />
        </div>
    );
};
