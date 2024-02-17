import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Entities/Article/ArticleDetails/Deprecated',
    component: ArticleDetails,
    // tags: ['autodocs'],
    args: { id: '1' },
    parameters: {
        loki: {
            captureDelay: 5000,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    // decorators: [
    //     PartialStoreDecorator({
    //         articleDetails: {
    //             data: mockArticleData,
    //             isLoading: true,
    //         },
    //     }),
    //     ThemeDecorator(Theme.LIGHT),
    // ],
};

export const Dark: Story = {};

export const Loading: Story = {
    decorators: [
        // TestDecorator('33333'),
        // LoadingDecorator,
        // TestDecorator('44444'),
    ],
};

export const Error: Story = {};
