import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'entity/Notification/NotificationList',
    component: NotificationList,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            profile: {
                form: {
                    first: 'Pavlo',
                },
            },
        })],
};
