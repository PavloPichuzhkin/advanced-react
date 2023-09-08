import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { UserRole } from 'enteties/User';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            user: {
                authData: { roles: [UserRole.ADMIN] },
            },
        })],
};
export const Dark : Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
