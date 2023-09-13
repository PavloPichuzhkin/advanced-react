import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { ArticleView } from '@/entities/Article';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'Pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

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
