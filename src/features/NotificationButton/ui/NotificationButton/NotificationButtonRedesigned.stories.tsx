import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';

const meta: Meta<typeof NotificationButton> = {
    title: 'Features/NotificationButton/Redesigned',
    component: NotificationButton,
    // tags: ['autodocs'],
    decorators: [
        AddStylesDecorator({
            padding: '2rem 2rem 24rem 20rem',
            display: 'flex',
            justifyContent: 'end',
            // background: 'var(--inverted-bg-color)',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {};
export const Loading: Story = {};
export const Error: Story = {};
