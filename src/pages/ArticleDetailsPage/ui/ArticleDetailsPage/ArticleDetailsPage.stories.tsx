import type { Meta, StoryObj } from '@storybook/react';
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-react-router-v6';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { getRouteArticleDetails } from '@/shared/const/router';
import { mockArticleData } from '@/entities/Article/testing';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    // tags: ['autodocs'],
    parameters: {
        loki: {
            captureDelay: 5000,
        },

        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '42' },
            },
            routing: { path: getRouteArticleDetails(':id') },
        }),
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {};
export const PrimaryRedesigned: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.LIGHT),
        // PartialStoreDecorator(
        //     {
        //         articleDetails: {
        //             data: mockArticleData,
        //         },
        //         articleDetailsPage: {
        //             comments: mockReturnArticleDetailsCommentsState(),
        //         },
        //     },
        //     { articleDetailsPage: articleDetailsPageReducer },
        // ),
    ],
};
