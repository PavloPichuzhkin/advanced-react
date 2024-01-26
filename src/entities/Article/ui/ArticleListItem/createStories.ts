import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from './ArticleListItem';

export const createStories = () => {
    type Story = StoryObj<typeof ArticleListItem>;
    const article = selectEntitiesFromNormalizedData(
        mockReturnArticlesPageState,
    )[0];
    const Primary: Story = {
        args: { article, view: ArticleView.SMALL },
    };

    const Big: Story = {
        args: { article, view: ArticleView.BIG },
    };
    const SmallDark: Story = {
        args: { article, view: ArticleView.SMALL },
        decorators: [ThemeDecorator(Theme.DARK)],
    };

    const BigDark: Story = {
        args: { article, view: ArticleView.BIG },
        decorators: [ThemeDecorator(Theme.DARK)],
    };

    const Danger: Story = {
        args: { article, view: ArticleView.BIG },
        decorators: [ThemeDecorator(Theme.DANGER)],
    };
    return { Primary, Big, SmallDark, BigDark, Danger };
};
