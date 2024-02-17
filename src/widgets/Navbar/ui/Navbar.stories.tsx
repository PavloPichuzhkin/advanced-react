import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { UserRole } from '@/entities/User';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar/Deprecated',
    component: Navbar,
    // tags: ['autodocs'],
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
        }),
    ],
};
export const DarkWithoutAuthData: Story = {
    args: {},
};
