import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import cls from './ProfilePage.module.scss';
import { NextPageWithLayout } from '@/shared/types/NextPageWithLayout';
import { Layout } from '@/widgets/Layout';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';

export const ProfilePage: NextPageWithLayout = (props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.profilePage)}>
            <div className={cls.controls}>
                <Text title="Настройки" />
                <Button>Редактировать</Button>
                <Button>Сохранить</Button>
            </div>
        </div>
    );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
