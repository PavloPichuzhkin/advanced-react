import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { QueryStatus } from '@reduxjs/toolkit/dist/query/core/apiState';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import ArticleRating from './ArticleRating';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { rtkApi } from '@/shared/api/rtkApi';

const meta: Meta<typeof ArticleRating> = {
    title: 'Features/ArticleRating',
    component: ArticleRating,
    // tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/article-ratings`, (_req, res, ctx) => {
                    return res(ctx.json(null));
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {},
};
export const PrimaryWithRating: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/article-ratings`, (_req, res, ctx) => {
                    return res(ctx.json([{ rate: 4 }]));
                }),
            ],
        },
    },
};
// export const PrimaryIsLoading: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK),
//         PartialStoreDecorator({
//             [rtkApi.reducerPath]: {
//                 queries: {
//                     'getArticleRating({"articleId":"1","userId":"2"})': {
//                         status: QueryStatus.pending,
//                         endpointName: 'getArticleRating',
//                         requestId: 'RJY6Av0EZChYePh0laDRW',
//                         originalArgs: {
//                             articleId: '1',
//                             userId: '2',
//                         },
//                         startedTimeStamp: 1694952589477,
//                     },
//                 },
//
//             },
//         }),
//     ],
// };
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Danger: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DANGER),
    ],
};
