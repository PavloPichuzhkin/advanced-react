import type { Meta, StoryObj } from '@storybook/react';
import {
    reactRouterParameters,
    withRouter,
} from 'storybook-addon-react-router-v6';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { mockArticleData } from '../../model/mocks/mockArticleData';
import { ArticleDetails } from './ArticleDetails';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { getRouteArticleDetails } from '@/shared/const/router';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Entities/Article/ArticleDetails',
    component: ArticleDetails,
    // tags: ['autodocs'],
    args: { id: '1' },
    parameters: {
        // loki: {
        //     captureDelay: 5000,
        // },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    decorators: [
        //     PartialStoreDecorator({
        //         articleDetails: {
        //             data: mockArticleData,
        //         },
        //     }),
        // ThemeDecorator(Theme.LIGHT),
    ],
};
export const PrimaryRedesigned: Story = {};
export const Dark: Story = {};

export const Loading: Story = {};

export const Error: Story = {};
