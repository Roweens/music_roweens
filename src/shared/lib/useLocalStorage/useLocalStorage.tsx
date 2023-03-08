import { useEffect, useState } from 'react';

interface UseLocalStorageResult<T> {
  returnValue: T | null,
  setReturnValue: (returnValue: T) => void
}

export function useLocalStorage<T >(key: string, fallback: T):UseLocalStorageResult<T> {
    const [returnValue, setReturnValue] = useState<T | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem(key) as T;
        setReturnValue(stored || fallback);
    }, [fallback, key]);

    useEffect(() => {
        if (typeof returnValue === 'string') localStorage.setItem(key, returnValue);
    }, [key, returnValue]);

    return { returnValue, setReturnValue };
}
