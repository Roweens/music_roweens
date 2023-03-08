import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme, TitleTheme } from '../Text/Text';
import cls from './Card.module.scss';

enum CardSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface CardProps {
  image: StaticImageData,
  title: string,
  text: string,
  className?: string;
  size?: CardSize,
}

export const Card = memo((props: CardProps) => {
    const { className, text, title, image, size = CardSize.M } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.cardWrapper, { [cls[size]]: true }, [className])}>
            <div className={cls.card}>
                <Image src={image} alt="card image" />
                <div className={cls.info}>
                    <h5 className={cls.title}>
                        {title}
                    </h5>
                    <p className={cls.text}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
});
