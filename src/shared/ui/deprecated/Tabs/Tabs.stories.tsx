import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Shared/Deprecated/Tabs',
    component: Tabs,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
    {
        value: 'tab 1',
        content: 'tab 1',
    },
    {
        value: 'tab 2',
        content: 'tab 2',
    },
    {
        value: 'tab 3',
        content: 'tab 3',
    },
];

export const Primary: Story = {
    args: {
        tabs,
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    args: {
        tabs,
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
