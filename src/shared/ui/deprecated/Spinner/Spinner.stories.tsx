import type { Meta, StoryObj } from '@storybook/react';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Shared/Spinner',
    component: Spinner,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
    args: {},
};
Light.decorators = [withStoryOrGlobalTheme(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [withStoryOrGlobalTheme(Theme.DARK)];
