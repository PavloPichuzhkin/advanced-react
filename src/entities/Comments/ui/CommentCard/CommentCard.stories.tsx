import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'Entities/Comments/CommentCard',
    component: CommentCard,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: { comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0] },

};

export const LightLoading: Story = {
    args: {
        comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0],
        isLoading: true,
    },

};
export const Dark: Story = {
    args: { comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0] },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const DarkLoading: Story = {
    args: {
        comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0],
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const Danger: Story = {
    args: {
        comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0],
    },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};

export const DangerLoading: Story = {
    args: {
        comment: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState)[0],
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};
