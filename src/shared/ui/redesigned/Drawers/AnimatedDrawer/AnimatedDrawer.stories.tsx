import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { AnimatedDrawer } from './AnimatedDrawer';
import { VStack } from '../../../redesigned/Stack';
import { Text, TextSize } from '../../../deprecated/Text';

const meta: Meta<typeof AnimatedDrawer> = {
    title: 'Shared/Drawers/AnimatedDrawer',
    component: AnimatedDrawer,
    // tags: ['autodocs'],
    args: {
        isOpen: true,
        lazy: false,
        children: (
            <VStack gap='16' align='center'>
                <Text
                    title='Some child 1'
                    text='Some child text 1'
                    size={TextSize.S}
                />
                <Text
                    title='Some child 2'
                    text='Some child text 1'
                    size={TextSize.M}
                />
                <Text
                    title='Some child 3'
                    text='Some child text 1'
                    size={TextSize.L}
                />
                <Text
                    title='Some child 4'
                    text='Some child text 1'
                    size={TextSize.XL}
                />
            </VStack>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof AnimatedDrawer>;

export const Primary: Story = {
    args: {},
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
