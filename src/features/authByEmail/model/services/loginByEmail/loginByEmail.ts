import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { AUTH_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUsernameProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByEmail',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post('/login', authData);
            extra.push('/');
            if (!response.data) throw new Error();

            localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
