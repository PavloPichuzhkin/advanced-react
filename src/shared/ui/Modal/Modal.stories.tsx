import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
