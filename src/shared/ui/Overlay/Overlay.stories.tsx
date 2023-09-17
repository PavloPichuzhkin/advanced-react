import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
    title: 'Shared/Overlay',
    component: Overlay,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
    args: {},
};
