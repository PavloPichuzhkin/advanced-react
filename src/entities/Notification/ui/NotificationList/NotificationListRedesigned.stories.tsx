import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'Entities/Notification/NotificationList/Redesigned',
    component: NotificationList,
    // tags: ['autodocs'],
    parameters: {
        loki: {
            captureDelay: 2000,
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {};

// export const Loading: Story = {}; //MSW handler problem

export const Error: Story = {};

export const Empty: Story = {};
