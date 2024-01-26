import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';

const meta: Meta<typeof CountrySelect> = {
    title: 'Entities/CountrySelect/Redesigned',
    component: CountrySelect,
    // tags: ['autodocs'],
    decorators: [AddStylesDecorator({ padding: '18rem 2rem', width: '100%' })],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};
