import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import ArticleRating from './ArticleRating';
import { articleRatingMSWHandler } from '../../model/mocks/articleRatingMSWHandler';

const meta: Meta<typeof ArticleRating> = {
    title: 'Features/ArticleRating/Deprecated',
    component: ArticleRating,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {},
};
export const PrimaryWithRating: Story = {
    args: {},
    parameters: {
        msw: articleRatingMSWHandler(4),
    },
};

export const Loading: Story = {
    parameters: {
        loki: { skip: true },
    },
};

export const Dark: Story = {};
export const Danger: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DANGER)],
};
