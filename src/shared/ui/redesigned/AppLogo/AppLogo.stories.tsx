import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AppLogo } from './AppLogo';

const meta: Meta<typeof AppLogo> = {
    title: 'Shared/AppLogo',
    component: AppLogo,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Primary: Story = {
    args: {},
    // decorators: [
    //     ThemeDecorator(Theme.DARK),
    //     PartialStoreDecorator({
    //         profile: {
    //             form: {
    //                 first: 'Pavlo',
    //             },
    //         },
    //     }),
    // ],
};