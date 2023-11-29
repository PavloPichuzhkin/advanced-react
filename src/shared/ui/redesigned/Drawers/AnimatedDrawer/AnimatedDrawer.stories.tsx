import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedDrawer } from './AnimatedDrawer';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { mockDrawersChildren } from '@/shared/assets/tests/mockDrawersChildren';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof AnimatedDrawer> = {
    title: 'Shared/Redesigned/Drawers/AnimatedDrawer',
    component: AnimatedDrawer,
    // tags: ['autodocs'],
    args: {
        isOpen: true,
        lazy: false,
        children: mockDrawersChildren,
    },
};

export default meta;
type Story = StoryObj<typeof AnimatedDrawer>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
Primary.decorators = [RedesignDecorator, ThemeDecorator(Theme.LIGHT)];

// export const Dark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
// export const Danger: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DANGER)],
// };
