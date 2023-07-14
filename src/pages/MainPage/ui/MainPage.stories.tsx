import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'Pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: { },
};

export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
