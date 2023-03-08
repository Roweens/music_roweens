import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { TransitionOptions } from 'next/dist/shared/lib/router/router';
import { loginReducer } from '@/features/authByEmail';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';

export function createReduxStore(
    initialState?: StateSchema,
    push?: (url: Url, as?: Url, options?: TransitionOptions) => Promise<boolean>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        login: loginReducer,
        user: userReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
        push,
    };

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
