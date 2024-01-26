import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'Entities/RatingCard/Deprecated',
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

export const Rated: Story = {
    args: {
        feedbackTitle: 'WOW what is...',
        rate: 4,
        title: 'WOW I can click here',
        hasFeedback: true,
    },
};
