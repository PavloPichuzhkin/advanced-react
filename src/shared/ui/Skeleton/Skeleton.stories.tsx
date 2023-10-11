import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Shared/Skeleton',
    component: Skeleton,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        border: '5px',
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 150,
        height: 150,
    },
};

export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 150,
        height: 150,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryDanger: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DANGER)],
};
export const CircleDanger: Story = {
    args: {
        border: '50%',
        width: 150,
        height: 150,
    },
    decorators: [ThemeDecorator(Theme.DANGER)],
};
