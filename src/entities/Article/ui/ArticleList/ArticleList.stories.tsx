import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'Entities/Article/ArticleList',
    component: ArticleList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const articles = selectEntitiesFromNormalizedData(mockReturnArticlesPageState) as Article[];

export const Primary: Story = {
    args: { articles },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const Loading: Story = {
    args: { articles: [], isLoading: true },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const LightBig: Story = {
    args: { articles, view: ArticleView.BIG },
};

export const LightBigLoading: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.BIG },
};

export const Danger: Story = {
    args: { articles },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};
