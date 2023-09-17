import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { NotificationButton } from './NotificationButton';
import { mockNotifications } from '@/shared/assets/tests/mockNotifications';

const meta: Meta<typeof NotificationButton> = {
    title: 'Features/NotificationButton',
    component: NotificationButton,
    // tags: ['autodocs'],
    decorators: [
        (Story: StoryFn) => (
            <div style={{
                padding: '0 15rem',
                display: 'flex',
                justifyContent: 'end',
            }}
            >
                <Story />
            </div>
        ),
    ],
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
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    args: {},
    decorators: [],
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
