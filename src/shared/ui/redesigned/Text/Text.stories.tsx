import type { Meta, StoryObj } from '@storybook/react';
import {
    ThemeDecorator,
    withStoryOrGlobalTheme,
} from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text } from './Text';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Text> = {
    title: 'Shared/Redesigned/Text',
    component: Text,
    // tags: ['autodocs'],
    decorators: [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)],
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

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};
