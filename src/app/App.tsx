import classNames from 'classnames';
import { AppProps } from 'next/app';
import { NextPageWithLayout } from '../shared/types/NextPageWithLayout';

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <div className={classNames('app dark')}>
            {getLayout(<Component {...pageProps} />)}
        </div>
    );
}
