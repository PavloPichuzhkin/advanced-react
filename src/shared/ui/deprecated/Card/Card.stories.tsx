import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Deprecated/Card',
    component: Card,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title='title title' text='text text' />,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    args: {
        children: <Text title='title title' text='text text' />,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Danger: Story = {
    args: {
        children: <Text title='title title' text='text text' />,
    },
    decorators: [ThemeDecorator(Theme.DANGER)],
};
