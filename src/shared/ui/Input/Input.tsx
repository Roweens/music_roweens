import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

type BasicInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends BasicInputProps{
  className?: string,
  value?: string,
  onChange?: (value: string) => void,
  theme?: InputTheme,
  focused?: boolean,
  placeholder?:string
}

export const Input = memo((props: InputProps) => {
    const { className,
        theme = InputTheme.FILLED,
        value,
        onChange,
        focused,
        placeholder,
        ...otherProps } = props;

    const inputRef = useRef<HTMLInputElement>();
    const placeHolderRef = useRef<HTMLSpanElement>();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocusHandler = () => {
        placeHolderRef?.current?.classList?.add(cls.focused);
    };

    const onBlurHandler = () => {
        if (!value) {
            placeHolderRef.current.classList.remove(cls.focused);
        }
    };

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    useEffect(() => {
        if (focused) {
            inputRef.current.focus();
            placeHolderRef?.current?.classList?.add(cls.focused);
        }
    }, [focused]);

    return (
        <div className={cls.inputWrapper}>
            <input
                className={classNames(cls.Input, className, mods)}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                autoComplete="new-password"
                ref={inputRef}
                {...otherProps}
            />
            <span className={cls.placeholder} ref={placeHolderRef}>{placeholder}</span>
        </div>
    );
});
