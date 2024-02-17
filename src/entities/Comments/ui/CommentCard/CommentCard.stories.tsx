import type { Meta, StoryObj } from '@storybook/react';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticleDetailsCommentsState } from '../../model/mocks/mockArticleDetailsComments';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'Entities/Comments/CommentCard/Deprecated',
    component: CommentCard,
    // tags: ['autodocs'],
    args: {
        comment: selectEntitiesFromNormalizedData(
            mockReturnArticleDetailsCommentsState(),
        )[0],
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {};

export const LightLoading: Story = {
    args: {
        isLoading: true,
    },
};
export const Dark: Story = {
    args: {},
};

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
