import { AxiosInstance } from 'axios';
import { TransitionOptions } from 'next/dist/shared/lib/router/router';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/authByEmail';

export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    push?: (url: Url, as?: Url, options?: TransitionOptions) => Promise<boolean>;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
