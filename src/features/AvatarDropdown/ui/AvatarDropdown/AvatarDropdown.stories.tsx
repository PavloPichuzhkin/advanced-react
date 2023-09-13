import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AvatarDropdown } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'Pages/AvatarDropdown',
    component: AvatarDropdown,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            profile: {
                form: {
                    first: 'Pavlo',
                },
            },
        })],
};
