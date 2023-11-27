import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Button> = {
    title: 'Shared/Redesigned/Button',
    component: Button,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};
Outline.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];

export const Square: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'l',
    },
};
Square.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
        size: 'l',
    },
};
Clear.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];
