import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockProfileData } from '@/shared/assets/tests/mockProfileData';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'Features/EditableProfileCard/EditableProfileCard/Deprecated',
    component: EditableProfileCard,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                readonly: true,
                form: mockProfileData,
                data: mockProfileData,
            },
        }),
    ],
};

export const EditMode: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                readonly: false,
                form: mockProfileData,
                data: mockProfileData,
            },
        }),
    ],
};
export const Loading: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                readonly: true,
                isLoading: true,
            },
        }),
    ],
};
