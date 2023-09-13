import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {},
};
export const Dark : Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Danger : Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DANGER),
    ],
};
