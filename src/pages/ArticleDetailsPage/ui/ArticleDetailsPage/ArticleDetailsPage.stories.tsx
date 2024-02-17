import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import ArticleDetailsPage from './ArticleDetailsPage';
import { getRouteArticleDetails } from '@/shared/const/router';
import { InitUserDecorator } from '@/shared/config/storybook/InitUserDecorator';

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

export const Primary: Story = {
    decorators: [InitUserDecorator()],
};
export const PrimaryRedesigned: Story = {
    args: {},
    decorators: [
        // InitUserDecorator(),
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
