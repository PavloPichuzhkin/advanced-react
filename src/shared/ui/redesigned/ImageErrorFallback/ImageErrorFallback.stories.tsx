import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ImageErrorFallback } from './ImageErrorFallback';

const meta: Meta<typeof ImageErrorFallback> = {
    title: 'Pages/ImageErrorFallback',
    component: ImageErrorFallback,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageErrorFallback>;

export const Primary: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            profile: {
                form: {
                    first: 'Pavlo',
                },
            },
        }),
    ],
};
