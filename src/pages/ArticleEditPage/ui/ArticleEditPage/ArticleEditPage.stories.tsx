import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import ArticleEditPage from './ArticleEditPage';
import { getRouteArticleEdit } from '@/shared/const/router';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'Pages/ArticleEditPage',
    component: ArticleEditPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {};

export const IsEdit: Story = {
    args: {},
    parameters: {
        // loki: {
        //     captureDelay: 5000,
        // },

        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: 'someString' },
            },
            routing: { path: getRouteArticleEdit(':id') },
        }),
    },
};

export const PrimaryRedesigned: Story = {};

export const IsEditRedesigned: Story = {
    args: {},
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: 'someString' },
            },
            routing: { path: getRouteArticleEdit(':id') },
        }),
    },
};
