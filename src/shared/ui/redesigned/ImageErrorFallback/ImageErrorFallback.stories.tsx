import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ImageErrorFallback } from './ImageErrorFallback';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof ImageErrorFallback> = {
    title: 'Shared/Redesigned/ImageErrorFallback',
    component: ImageErrorFallback,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageErrorFallback>;

export const Primary: Story = {
    args: { width: 100, height: 100 },
    decorators: [RedesignDecorator, ThemeDecorator(Theme.LIGHT)],
};
