import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import cls from './LoginPage.module.scss';
import { LoginCard } from '@/features/authByEmail';

interface LoginPageProps {
  className?: string;
}

export const LoginPage: FC<LoginPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginPageWrapper, {}, [className])}>
            <LoginCard />
        </div>
    );
};
