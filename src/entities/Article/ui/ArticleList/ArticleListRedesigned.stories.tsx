import type { Meta } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { createStories } from './createStories';

const meta: Meta<typeof ArticleList> = {
    title: 'Entities/Article/ArticleList/Redesigned',
    component: ArticleList,
    parameters: {
        loki: {
            captureDelay: 6000,
        },
    },
    // tags: ['autodocs'],
};

export default meta;

const stories = createStories();

export const Primary = stories[0];

export const Loading = stories[1];

export const Big = stories[2];

export const BigLoading = stories[3];

export const Danger = stories[4];
