import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Sidebar } from './Sidebar';
import cls from './Sidebar.module.scss';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar/Deprecated',
    component: Sidebar,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Collapsed: Story = {
    args: {
        isCollapsed: true,
    },
    decorators: [
        PartialStoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Light: Story = {
    args: { className: cls.storybookDeprecated },
};
Light.decorators = [
    PartialStoreDecorator({
        user: { authData: {} },
    }),
];

export const Unauthorized: Story = {
    args: { className: cls.storybookDeprecated },
};
