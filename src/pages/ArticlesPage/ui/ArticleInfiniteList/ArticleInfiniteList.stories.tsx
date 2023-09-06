import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from 'shared/assets/tests/mockReturnArticlesPageState';
import { ArticleView } from 'enteties/Article';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'Pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState(),
        })],
};

export const Loading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState(true),
        })],
};

export const Error: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState(false, ArticleView.SMALL, 'ooo'),
        })],
};

export const Big: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState(false, ArticleView.BIG),
        })],
};
