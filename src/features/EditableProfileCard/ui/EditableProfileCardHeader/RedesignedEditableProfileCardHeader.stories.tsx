import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'Features/EditableProfileCard/EditableProfileCardHeader/Redesigned',
    component: EditableProfileCardHeader,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const PrimaryEditMode: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                // readonly: true,
            },
        }),
    ],
};
export const ReadonlyMode: Story = {};
export const NotMyProfile: Story = {
    decorators: [
        PartialStoreDecorator({
            profile: {
                data: { id: 'some' },
            },
        }),
    ],
};
