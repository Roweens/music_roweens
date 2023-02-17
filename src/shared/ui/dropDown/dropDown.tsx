/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { FC } from 'react';
import DownArrow from '@/../../public/down.svg';
import cls from './dropDown.module.scss';
import useComponentVisible from '@/shared/lib/UseVisible/UseComponentVisible';

export enum ThemeDropDown {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

type OptionsType = {
    id: number;
    label: string | number;
    value: string;
};

interface DropDownProps {
    className?: string;
    title: string;
    options: OptionsType[];
    state: unknown;
    onClick: (value: any) => void;
    theme?: ThemeDropDown;
}

export const DropDown: FC<DropDownProps> = (props) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const { className, title, options, state, onClick, theme = ThemeDropDown.FILLED } = props;

    const selectItem = (value: string | number): void => {
        setIsComponentVisible(false);
        onClick(value);
    };

    return (
        <div className={classNames(cls.dropDown, {}, [className, cls[theme]])} ref={ref}>
            <div
                className={classNames(cls.dropDownChip, {}, [className])}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
                <h5>{title}</h5>
                <DownArrow fill="var(--primary-color)" />
            </div>
            {isComponentVisible && (
                <div className={classNames(cls.dropDownList)}>
                    <ul>
                        {options.map((option) => (
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                            <li
                                key={option.id}
                                onClick={() => selectItem(option.label)}
                                className={classNames({
                                    selected: option.value === state,
                                })}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
