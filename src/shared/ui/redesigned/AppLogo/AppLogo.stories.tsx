import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AppLogo } from './AppLogo';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof AppLogo> = {
    title: 'Shared/Redesigned/AppLogo',
    component: AppLogo,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [RedesignDecorator];
