import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'Shared/Popups/Popover',
    component: Popover,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        // PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        // }),
    ],
};
