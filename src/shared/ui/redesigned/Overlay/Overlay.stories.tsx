import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Overlay> = {
    title: 'Shared/Redesigned/Overlay',
    component: Overlay,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
    args: {},
    decorators: [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)],
};
