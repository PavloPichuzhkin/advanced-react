import type { Meta, StoryObj } from '@storybook/react';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Shared/Input',
    component: Input,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Text',
        value: '121212',
        autofocus: true,
    },
};
Primary.decorators = [withStoryOrGlobalTheme(Theme.LIGHT)];

export const Dark: Story = {
    args: {
        placeholder: 'Text',
        value: '121212',
        autofocus: true,
    },
};
Dark.decorators = [withStoryOrGlobalTheme(Theme.DARK)];
