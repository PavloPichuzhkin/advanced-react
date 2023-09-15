import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'Pages/ArticleRating',
    component: ArticleRating,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

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
