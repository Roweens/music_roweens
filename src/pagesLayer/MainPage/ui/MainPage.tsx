import classNames from 'classnames';
import { ReactElement, useState } from 'react';
import cls from './MainPage.module.scss';
import { NextPageWithLayout } from '@/shared/types/NextPageWithLayout';
import { Layout } from '@/widgets/Layout';
import { DropDown } from '@/shared/ui/dropDown/dropDown';

export const MainPage: NextPageWithLayout = () => {
    const [filter, setFilter] = useState('Any');

    const valuesArray = [
        {
            id: 0,
            label: 'Date',
            value: 'date',
        },
        {
            id: 1,
            label: 'Year',
            value: 'year',
        },
        {
            id: 2,
            label: 'Type',
            value: 'type',
        },
    ];

    return (
        <div className={classNames(cls.mainPage)}>
            {' '}
            <DropDown
                title={filter}
                state={filter}
                onClick={setFilter}
                options={valuesArray}
            />
        </div>
    );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
