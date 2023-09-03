import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { StoryFn } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'Features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.DARK),
        // PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        // }),
        // (Story: StoryFn) => (
        //     <div style={{ padding: '5rem' }}><Story /></div>
        // )
    ],
};
