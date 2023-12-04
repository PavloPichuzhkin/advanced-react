import type { Meta, StoryObj } from '@storybook/react';
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-react-router-v6';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { mockArticleData } from '@/shared/assets/tests/mockArticleData';
import { ArticleDetails } from './ArticleDetails';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { getRouteArticleDetails } from '@/shared/const/router';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Entities/Article/ArticleDetails',
    component: ArticleDetails,
    // tags: ['autodocs'],
    parameters: {
        // loki: {
        //     captureDelay: 5000,
        // },
        // reactRouter: reactRouterParameters({
        //     location: {
        //         pathParams: { id: '41' },
        //     },
        //     routing: { path: getRouteArticleDetails(':id') },
        // }),
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    // args: { id: '2' },
    decorators: [
        //     PartialStoreDecorator({
        //         articleDetails: {
        //             data: mockArticleData,
        //         },
        //     }),
        ThemeDecorator(Theme.LIGHT),
    ],
    // parameters: {
    //     reactRouter: reactRouterParameters({
    //         location: {
    //             pathParams: { id: '41' },
    //         },
    //         routing: { path: getRouteArticleDetails(':id') },
    //     }),
    // },
};
export const PrimaryRedesigned: Story = {
    args: { id: '1' },
    decorators: [
        // PartialStoreDecorator({
        //     articleDetails: {
        //         data: mockArticleData,
        //     },
        // }),
        ThemeDecorator(Theme.LIGHT),
        RedesignDecorator,
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                data: mockArticleData,
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
    ],
};
