import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Shared/Deprecated/Select',
    component: Select,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Select something',
        options: [
            { value: '1', content: 'First option' },
            { value: '2', content: 'Second option' },
        ],
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {
        label: 'Select something',
        options: [
            { value: '1', content: 'First option' },
            { value: '2', content: 'Second option' },
        ],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
