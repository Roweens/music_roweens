import { FC } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { NextLink } from '@/shared/ui/NextLink/NextLink';

interface LangSwitcherProps {
     className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { asPath, locale } = useRouter();
    const { t } = useTranslation();
    const switchLocale = locale === 'ru' ? 'en' : 'ru';

    return (
        <div className={classNames(className)}>
            <NextLink locale={switchLocale} href={asPath}>
                <Text title={`${t('Язык')}: ${locale}`} />
            </NextLink>
        </div>
    );
};
