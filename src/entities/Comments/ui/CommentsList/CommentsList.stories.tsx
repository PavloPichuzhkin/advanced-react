import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
    title: 'Enteties/Comments/CommentsList',
    component: CommentsList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
    args: { comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState) },

};

export const LightLoading: Story = {
    args: {
        comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState),
        isLoading: true,
    },

};
export const Dark: Story = {
    args: { comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState) },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const DarkLoading: Story = {
    args: {
        comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState),
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK),
    ],
};

export const Danger: Story = {
    args: {
        comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState),
    },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};

export const DangerLoading: Story = {
    args: {
        comments: selectEntitiesFromNormalizedData(mockReturnArticleDetailsCommentsState),
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DANGER),
    ],
};
