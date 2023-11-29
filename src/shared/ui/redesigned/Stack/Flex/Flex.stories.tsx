import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Flex> = {
    title: 'Shared/Redesigned/Flex',
    component: Flex,
    // tags: ['autodocs'],
    decorators: [RedesignDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Flex>;

const flaxChildren = (
    <>
        <div>someText</div>
        <div>someText</div>
        <div>someText</div>
        <div>someText</div>
    </>
);

export const Row: Story = {
    args: {
        children: flaxChildren,
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: flaxChildren,
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: flaxChildren,
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: flaxChildren,
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: flaxChildren,
    },
};

export const ColumnGap8: Story = {
    args: {
        gap: '8',
        direction: 'column',
        children: flaxChildren,
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: flaxChildren,
    },
};

export const ColumnGap32: Story = {
    args: {
        gap: '32',
        direction: 'column',
        children: flaxChildren,
    },
};
