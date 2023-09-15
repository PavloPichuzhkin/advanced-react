import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'Entities/RatingCard',
    component: RatingCard,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

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
