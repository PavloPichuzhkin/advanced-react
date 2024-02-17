import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockProfileData } from '@/shared/assets/tests/mockProfileData';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage/Redesigned',
    component: ProfilePage,
    parameters: {
        loki: {
            captureDelay: 5000,
        },
    },
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                form: mockProfileData,
                data: mockProfileData,
                readonly: true,
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
export const NotMyEmptyProfile: Story = {
    decorators: [
        PartialStoreDecorator({
            profile: {
                data: { id: 'some' },
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
