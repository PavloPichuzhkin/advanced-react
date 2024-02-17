import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Sidebar } from './Sidebar';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';
import cls from './Sidebar.module.scss';

const meta: Meta<typeof Sidebar> = {
    title: 'Widgets/Sidebar/Redesigned',
    component: Sidebar,
    // tags: ['autodocs'],
    decorators: [
        AddStylesDecorator({
            width: 'max-content',
            height: '95vh',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Collapsed: Story = {
    args: { isCollapsed: true },
    decorators: [
        PartialStoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Light: Story = {
    args: { className: cls.storybookRedesigned },
};
Light.decorators = [
    PartialStoreDecorator({
        user: { authData: {} },
    }),
];

export const Unauthorized: Story = {
    args: { className: cls.storybookRedesigned },
};
