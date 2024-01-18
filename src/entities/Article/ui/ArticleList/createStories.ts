import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export function createMeta(title: string) {
    const meta: Meta<typeof ArticleList> = {
        title: `Entities/Article/ArticleList/${title}`,
        component: ArticleList,
        parameters: {
            loki: {
                captureDelay: 6000,
            },
        },
        // tags: ['autodocs'],
    };
    return meta;
}

export const createStories = () => {
    type Story = StoryObj<typeof ArticleList>;

    const articles = selectEntitiesFromNormalizedData(
        mockReturnArticlesPageState,
    ) as Article[];

    const Primary: Story = {
        args: { articles },
        decorators: [ThemeDecorator(Theme.LIGHT)],
    };

    const Loading: Story = {
        args: { articles: [], isLoading: true },
        decorators: [ThemeDecorator(Theme.LIGHT)],
    };

    const Big: Story = {
        args: { articles, view: ArticleView.BIG },
        decorators: [ThemeDecorator(Theme.LIGHT)],
    };

    const BigLoading: Story = {
        args: { articles: [], isLoading: true, view: ArticleView.BIG },
        decorators: [ThemeDecorator(Theme.LIGHT)],
    };

    const Danger: Story = {
        args: { articles },
        decorators: [ThemeDecorator(Theme.DANGER)],
    };
    return [Primary, Loading, Big, BigLoading, Danger];
};
