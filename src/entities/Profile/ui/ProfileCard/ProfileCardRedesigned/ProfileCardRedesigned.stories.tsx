import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';
import { mockProfileData } from '../../../model/mocks/mockProfileData';

const meta: Meta<typeof ProfileCardRedesigned> = {
    title: 'Entities/ProfileCard/Redesigned',
    component: ProfileCardRedesigned,
    // tags: ['autodocs'],
    args: {
        data: mockProfileData,
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCardRedesigned>;

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
