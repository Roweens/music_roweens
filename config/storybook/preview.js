import { addDecorator } from '@storybook/react';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { LanguageDecorator } from '@/shared/config/storybook/LanguageDecorator/LanguageDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
};

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.LIGHT));
addDecorator(LanguageDecorator);
