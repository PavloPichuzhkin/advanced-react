import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { NotificationItem } from './NotificationItem';
import { mockNotifications } from '../../model/mocks/mockNotifications';

const meta: Meta<typeof NotificationItem> = {
    title: 'Entities/Notification/NotificationItem/Deprecated',
    component: NotificationItem,
    // tags: ['autodocs'],
    args: {
        item: mockNotifications[0],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {};

export const WithHref: Story = {
    args: {
        item: mockNotifications[1],
    },
};
