/* eslint-disable prefer-destructuring */
import type { Meta } from '@storybook/react';
import { ArticleListItem } from '../ArticleListItem';
import { createStories } from '../createStories';

const meta: Meta<typeof ArticleListItem> = {
    title: 'Entities/Article/ArticleListItem/Redesigned',
    component: ArticleListItem,
    // tags: ['autodocs'],
};

export default meta;

const stories = createStories();
export const Primary = stories.Primary;
export const Big = stories.Big;
// export const SmallDark = stories.SmallDark;
// export const BigDark = stories.BigDark;
// export const Danger = stories.Danger;
