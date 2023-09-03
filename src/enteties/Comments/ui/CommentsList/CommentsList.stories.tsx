import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
    title: 'Enteties/Comments/CommentsList',
    component: CommentsList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            profile: {
                form: {
                    first: 'Pavlo',
                },
            },
        })],
};
