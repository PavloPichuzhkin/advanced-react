import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'Shared/Popups/ListBox',
    component: ListBox,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        value: 'Value',
        items: [
            { content: 'Some content 1', value: 'Value 1' },
            { content: 'Some content 2', value: 'Value 2' },
            { content: 'Some content 3', value: 'Value 3' },
        ],
    },
    decorators: [
        (Story: StoryFn) => (
            <div style={{ padding: '5rem' }}><Story /></div>
        )],
};

export const Dark: Story = {
    args: {
        value: 'Value 2',
        items: [
            { content: 'Some content 1', value: 'Value 1' },
            { content: 'Some content 2', value: 'Value 2' },
            { content: 'Some content 3', value: 'Value 3' },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK),
        (Story: StoryFn) => (
            <div style={{ padding: '5rem' }}><Story /></div>
        )],
};
