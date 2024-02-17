import type { Meta, StoryObj } from '@storybook/react';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticleDetailsCommentsState } from '../../model/mocks/mockArticleDetailsComments';
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
    title: 'Entities/Comments/CommentsList/Deprecated',
    component: CommentsList,
    // tags: ['autodocs'],
    args: {
        comments: selectEntitiesFromNormalizedData(
            mockReturnArticleDetailsCommentsState(),
        ),
    },
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {};

export const LightLoading: Story = {
    args: {
        isLoading: true,
    },
};
export const Dark: Story = {};

export const DarkLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const Danger: Story = {};

export const DangerLoading: Story = {
    args: {
        isLoading: true,
    },
};
