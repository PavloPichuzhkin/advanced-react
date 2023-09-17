import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import {
    mockReturnArticlesPageState,

} from '@/shared/assets/tests/mockReturnArticlesPageState';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'Entities/Article/ArticleListItem',
    component: ArticleListItem,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;
const article = selectEntitiesFromNormalizedData(mockReturnArticlesPageState)[0];
export const Primary: Story = {
    args: { article, view: ArticleView.SMALL },
};

export const Big: Story = {
    args: { article, view: ArticleView.BIG },
};
export const SmallDark: Story = {
    args: { article, view: ArticleView.SMALL },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const BigDark: Story = {
    args: { article, view: ArticleView.BIG },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const Danger: Story = {
    args: { article, view: ArticleView.BIG },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};
