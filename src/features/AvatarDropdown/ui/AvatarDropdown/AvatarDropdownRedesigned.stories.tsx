import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRole } from '@/entities/User';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'Features/AvatarDropdown/Redesigned',
    component: AvatarDropdown,
    // tags: ['autodocs'],
    decorators: [
        PartialStoreDecorator({
            user: {
                authData: {
                    username: 'Pavlo',
                    roles: [UserRole.SUPER_ADMIN],
                    avatar: AvatarImg,
                },
            },
        }),
        AddStylesDecorator({
            padding: '2rem 12rem 16rem 12rem',
            display: 'flex',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {};

export const DarkWithoutAuthData: Story = {
    decorators: [
        PartialStoreDecorator({
            // user: {},
        }),
    ],
};

export const DangerWithoutAvatar: Story = {
    decorators: [
        PartialStoreDecorator({
            user: {
                authData: {}, // roles undefined so Admin panel unavailable
            },
        }),
    ],
};
