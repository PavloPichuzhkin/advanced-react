import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Popover } from './Popover';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';

const meta: Meta<typeof Popover> = {
    title: 'Shared/Redesigned/Popups/Popover',
    component: Popover,
    // tags: ['autodocs'],
    args: {
        trigger: (
            <Button as='span' variant='clear'>
                <Icon Svg={NotificationIcon} />
            </Button>
        ),
        direction: 'bottom right',
        // children: <NotificationList className={cls.notifications} />,
        children: (
            <>
                <div>Some child 1</div>
                <div>Some child 2</div>
                <div>Some child 3</div>
                <div>Some child 4</div>
            </>
        ),
    },
    decorators: [
        (Story: StoryFn) => (
            <div
                style={{
                    whiteSpace: 'nowrap',
                    padding: '0 15rem',
                    display: 'flex',
                    justifyContent: 'end',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {
        // trigger,
        // direction: 'bottom right',
        // children,
    },
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
