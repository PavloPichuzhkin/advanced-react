import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { rest } from 'msw';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'Features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    // tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.DARK),
        // PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        // }),
        // (Story: StoryFn) => (
        //     <div style={{ padding: '5rem' }}><Story /></div>
        // )
    ],
    parameters: {
        // msw: {
        //     handlers: [
        //         rest.get('/user', (req, res, ctx) => {
        //             return res(
        //                 ctx.json(selectEntitiesFromNormalizedData(mockReturnArticlesPageState) as Article[]),
        //             );
        //         }),
        //     ],
        // },
        msw: {
            handlers: [
                rest.get(`${__API__}/articles`, (_req, res, ctx) => {
                    console.log(
                        'handler work',
                    );
                    return res(ctx.json(selectEntitiesFromNormalizedData(mockReturnArticlesPageState) as Article[]));
                }),
            ],
        },
        // msw: [
        //     rest.get('/articles', (_req, res, ctx) => {
        //         console.log('handler work');
        //         return res(ctx.json(selectEntitiesFromNormalizedData(mockReturnArticlesPageState) as Article[]));
        //     }),
        // ],
    },

};
