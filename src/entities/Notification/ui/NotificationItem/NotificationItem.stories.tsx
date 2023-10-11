import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { NotificationItem } from './NotificationItem';
import { mockNotifications } from '@/shared/assets/tests/mockNotifications';

const meta: Meta<typeof NotificationItem> = {
    title: 'Entities/Notification/NotificationItem',
    component: NotificationItem,
    // tags: ['autodocs'],
    args: {
        item: mockNotifications[0],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Danger: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DANGER)],
};
