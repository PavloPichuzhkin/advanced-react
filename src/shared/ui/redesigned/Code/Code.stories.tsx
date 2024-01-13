import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { codeExample } from './mockCodeExample';

const meta: Meta<typeof Code> = {
    title: 'Shared/Redesigned/Code',
    component: Code,
    // tags: ['autodocs'],
    args: { text: codeExample },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {};
