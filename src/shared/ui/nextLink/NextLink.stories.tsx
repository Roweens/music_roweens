import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon from '@/../../public/search.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { NextLink } from './NextLink';

export default {
    title: 'shared/NextLink',
    component: NextLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        href: '#',
    },
} as ComponentMeta<typeof NextLink>;

const Template: ComponentStory<typeof NextLink> = (args) => <NextLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Light link',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Dark link',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'Icon link',
    Icon: SearchIcon,
};
