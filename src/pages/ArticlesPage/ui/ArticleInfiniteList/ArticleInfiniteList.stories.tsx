import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { ArticleView } from '@/entities/Article';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'Pages/ArticlesPage/ArticleInfiniteList/Deprecated',
    component: ArticleInfiniteList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({}),
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({ isLoading: true }),
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
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
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({
                view: ArticleView.BIG,
            }),
        }),
    ],
};
