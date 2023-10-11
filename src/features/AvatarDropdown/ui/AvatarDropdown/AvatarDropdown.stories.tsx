import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { UserRole } from '@/entities/User';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'Features/AvatarDropdown',
    component: AvatarDropdown,
    // tags: ['autodocs'],
    decorators: [
        PartialStoreDecorator({
            user: {
                authData: {
                    username: 'Pavlo',
                    roles: [UserRole.SUPER_ADMIN],
                },
            },
        }),
        (Story: StoryFn) => (
            <div style={{ padding: '8rem 12rem', display: 'flex' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Danger: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DANGER)],
};
