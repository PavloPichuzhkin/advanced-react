import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import {
    ThemeDecorator,
    withThemeProvider,
} from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Redesigned/Modal/Modal',
    component: Modal,
    // tags: ['autodocs'],
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children:
            // (
            // <AppText
            //     text={
            //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n '
            //     }
            // />
            // ),
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};
Light.decorators = [RedesignDecorator, withThemeProvider];
