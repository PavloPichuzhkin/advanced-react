import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text, TextAlign, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Text> = {
    title: 'Shared/Deprecated/Text',
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
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const PrimaryCenterAlign: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        align: TextAlign.CENTER,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const PrimaryRightAlign: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        align: TextAlign.RIGHT,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeXL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.XL,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ErrorDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {};
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {};
OnlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {};
OnlyTextDark.args = {
    text: 'Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
