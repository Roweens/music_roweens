import axios from 'axios';
import { AUTH_LOCALSTORAGE_KEY } from '../const/localStorage';

export const $api = axios.create({
    baseURL: process.env.API_URL,
    headers:
        typeof window === 'object'
            ? { authorization: localStorage.getItem(AUTH_LOCALSTORAGE_KEY) || '' }
            : undefined,
});
