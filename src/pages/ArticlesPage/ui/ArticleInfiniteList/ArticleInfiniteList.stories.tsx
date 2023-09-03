import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
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
    // decorators: [ThemeDecorator(Theme.DARK),
    //     PartialStoreDecorator({
    //         articlesPage: {
    //         },
    //     })],
};
