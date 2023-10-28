import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Redesigned/Text',
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
export const PrimaryCenterAlign: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        align: 'center',
    },
};
export const PrimaryRightAlign: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        align: 'right',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: 's',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: 'm',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: 'l',
    },
};

export const SizeXL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: 'xl',
    },
};
export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        variant: 'error',
    },
};

export const Accent: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        variant: 'accent',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark: Story = {};
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {};
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {};
onlyTextDark.args = {
    text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
