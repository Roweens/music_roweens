import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '@/app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const App = Template.bind({});
App.args = {
    theme: TextTheme.APP,
    title: 'Some title',
    text: 'Test text',
};

export const Primary = Template.bind({});
Primary.args = {
    theme: TextTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
    theme: TextTheme.INVERTED,
    title: 'Some title',
    text: 'Test text',
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Some title',
    text: 'Test text',
};
InvertedDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Some title',
    text: 'Test text',
};

export const Success = Template.bind({});
Success.args = {
    theme: TextTheme.SUCCESS,
    title: 'Some title',
    text: 'Test text',
};
