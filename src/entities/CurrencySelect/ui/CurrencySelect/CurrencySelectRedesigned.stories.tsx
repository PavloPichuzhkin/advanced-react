import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';

const meta: Meta<typeof CurrencySelect> = {
    title: 'Entities/CurrencySelect/Redesigned',
    component: CurrencySelect,
    // tags: ['autodocs'],
    decorators: [AddStylesDecorator({ padding: '18rem 2rem', width: '100%' })],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {},
};
