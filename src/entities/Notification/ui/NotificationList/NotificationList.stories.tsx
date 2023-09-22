import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { NotificationList } from './NotificationList';
import { mockNotifications } from '@/shared/assets/tests/mockNotifications';

const meta: Meta<typeof NotificationList> = {
    title: 'Entities/Notification/NotificationList',
    component: NotificationList,
    // tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/notifications`, (_req, res, ctx) => {
                    return res(ctx.json(mockNotifications));
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Danger: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DANGER),
    ],
};
