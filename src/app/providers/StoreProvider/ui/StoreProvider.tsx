import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?:ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const { push } = useRouter();
    const store = createReduxStore(initialState as StateSchema, push);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
