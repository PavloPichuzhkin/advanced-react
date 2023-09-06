import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { article } from 'shared/assets/tests/mockArticleData';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Enteties/Article/ArticleDetails',
    component: ArticleDetails,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    args: { id: '1' },
    decorators: [
        PartialStoreDecorator({
            articleDetails: {
                data: article,
            },
        })],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                data: article,
            },
        })],
};

export const Loading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        })],
};

export const Error: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                error: 'error',
            },
        })],
};
