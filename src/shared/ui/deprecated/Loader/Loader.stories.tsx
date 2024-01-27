import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'Shared/Deprecated/Loader',
    component: Loader,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
