import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitle : Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const onlyText : Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark : Story = {};
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark : Story = {};
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark : Story = {};
onlyTextDark.args = {
    text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
