import classNames from 'classnames';
import { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cls from './MainPage.module.scss';
import { NextPageWithLayout } from '@/shared/types/NextPageWithLayout';
import { Layout } from '@/widgets/Layout';

export const MainPage: NextPageWithLayout = () => {
    return (
        <div className={classNames(cls.mainPage)}>
            Main page
        </div>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'sidebar',
                'userMenu',
                'common',
            ])),
            // Will be passed to the page component as props
        },
    };
}

MainPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
