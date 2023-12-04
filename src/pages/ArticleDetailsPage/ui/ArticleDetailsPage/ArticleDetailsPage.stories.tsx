import type { Meta, StoryObj } from '@storybook/react';
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-react-router-v6';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { mockArticleData } from '@/shared/assets/tests/mockArticleData';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { getRouteArticleDetails } from '@/shared/const/router';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    parameters: {
        loki: {
            captureDelay: 5000,
        },

        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '42' },
                // searchParams: { isLoading: 'true' },
            },
            routing: { path: getRouteArticleDetails(':id') },
        }),
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
    parameters: {
        loki: {
            captureDelay: 5000,
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const PrimaryRedesigned: Story = {
    args: {},
    decorators: [
        ThemeDecorator(),
        RedesignDecorator,
        PartialStoreDecorator(
            {
                articleDetails: {
                    data: mockArticleData,
                },
                articleDetailsPage: {
                    comments: mockReturnArticleDetailsCommentsState(),
                },
            },
            { articleDetailsPage: articleDetailsPageReducer },
        ),
    ],
};
