import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AnimatedDrawer } from './AnimatedDrawer';

const meta: Meta<typeof AnimatedDrawer> = {
    title: 'Pages/AnimatedDrawer',
    component: AnimatedDrawer,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AnimatedDrawer>;

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
