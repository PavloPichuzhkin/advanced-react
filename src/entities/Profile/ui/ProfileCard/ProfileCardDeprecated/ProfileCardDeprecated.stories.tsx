import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { mockProfileData } from '../../../model/mocks/mockProfileData';

const meta: Meta<typeof ProfileCardDeprecated> = {
    title: 'Entities/ProfileCard/Deprecated',
    component: ProfileCardDeprecated,
    // tags: ['autodocs'],
    args: {
        data: mockProfileData,
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

export const Primary: Story = {};

export const PrimaryReadonly: Story = {
    args: {
        // data: mockProfileData,
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
