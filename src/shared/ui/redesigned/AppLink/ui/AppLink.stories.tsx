import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/Redesigned/AppLink',
    component: AppLink,
    // tags: ['autodocs'],
    args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Link',
    },
};
Primary.decorators = [RedesignDecorator];

export const Red: Story = {
    args: {
        children: 'Link',
        variant: 'red',
    },
};
Red.decorators = [RedesignDecorator];
