import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Drawer } from './Drawer';
import { Text, TextSize } from '../../Text';
import { VStack } from '../../../redesigned/Stack';

const meta: Meta<typeof Drawer> = {
    title: 'Shared/Drawers/Drawer',
    component: Drawer,
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
type Story = StoryObj<typeof Drawer>;

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
