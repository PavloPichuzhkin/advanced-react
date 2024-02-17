import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { mockProfileData } from '../../model/mocks/mockProfileData';

const meta: Meta<typeof ProfileCard> = {
    title: 'Entities/ProfileCard/Redesigned',
    component: ProfileCard,
    // tags: ['autodocs'],
    args: {
        data: mockProfileData,
    },
    parameters: {
        loki: {
            captureDelay: 3000,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};

export const PrimaryReadonly: Story = {
    args: {
        readonly: true,
    },
};

export const WithoutData: Story = { args: { data: {} } };

export const WithError: Story = {
    args: { error: 'error' },
};

export const Loading: Story = {
    args: { isLoading: true },
};
