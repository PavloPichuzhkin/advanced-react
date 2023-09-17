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
    args: {
        feedbackTitle: 'WOW what is...',
        hasFeedback: true,
        title: 'WOW I can click here',
    },
};

export const Dark: Story = {
    args: {
        feedbackTitle: 'WOW what is...',
        hasFeedback: true,
        title: 'WOW I can click here',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkWithRating: Story = {
    args: {
        feedbackTitle: 'WOW what is...',
        hasFeedback: true,
        title: 'WOW I can click here',
        rate: 4,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
