import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const AuthLight: Story = {
    args: {},
};
AuthLight.decorators = [
    PartialStoreDecorator({
        user: { authData: {} },
    })];

export const AuthDark: Story = {
    args: {},
};
AuthDark.decorators = [ThemeDecorator(Theme.DARK),
    PartialStoreDecorator({
        user: { authData: {} },
    })];

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
