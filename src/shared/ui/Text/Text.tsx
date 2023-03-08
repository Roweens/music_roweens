import classNames from 'classnames';
import { memo } from 'react';
import { Mods } from '@/shared/types/Mods';
import cls from './Text.module.scss';

export enum TitleTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  APP = 'app',
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  APP = 'app',
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  title?: string,
  text?: string,
  titleTheme?: TitleTheme
  textTheme?: TextTheme,
  align?: TextAlign
  classname?: string,
}

export const Text = memo((props: TextProps) => {
    const { title,
        text,
        textTheme = TextTheme.PRIMARY,
        titleTheme = TitleTheme.PRIMARY,
        align = TextAlign.LEFT,
        classname } = props;

    const mods: Mods = {
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.TextWrapper, mods, classname)}>
            {title && <h5 className={classNames(cls.title, cls[titleTheme])}>{title}</h5>}
            {text && <p className={classNames(cls.text, cls[textTheme])}>{text}</p>}
        </div>
    );
});
