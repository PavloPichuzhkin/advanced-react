import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { ArticleView } from '@/entities/Article';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'Pages/ArticlesPage/ArticleInfiniteList/Redesigned',
    component: ArticleInfiniteList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({}),
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({ isLoading: true }),
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({
                isLoading: false,
                view: ArticleView.SMALL,
                error: 'OhhError',
            }),
        }),
    ],
};

export const Big: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({
                view: ArticleView.BIG,
            }),
        }),
    ],
};
