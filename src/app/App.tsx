import classNames from 'classnames';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/useAppDispatch/useAppDispatch';
import { NextPageWithLayout } from '../shared/types/NextPageWithLayout';
import { StoreProvider } from './providers/StoreProvider';
import { ThemeProvider } from './providers/ThemeProvider';

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);
    const dispatch = useAppDispatch();

    useEffect(() => {

    }, [dispatch]);

    return (

        <ThemeProvider>
            <Suspense fallback="">
                <div className={classNames('app')}>
                    <StoreProvider>
                        {getLayout(<Component {...pageProps} />)}
                    </StoreProvider>
                </div>
            </Suspense>
        </ThemeProvider>

    );
}

export default appWithTranslation(App);
