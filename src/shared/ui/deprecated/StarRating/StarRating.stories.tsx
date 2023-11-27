import type { Meta, StoryObj } from '@storybook/react';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'Shared/StarRating',
    component: StarRating,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
    args: {},
    decorators: [withStoryOrGlobalTheme(Theme.LIGHT)],
};
