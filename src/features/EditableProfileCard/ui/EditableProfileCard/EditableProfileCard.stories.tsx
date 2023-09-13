import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Currency } from '@/entities/CurrencySelect';
import { Country } from '@/entities/CountrySelect';
import { mockProfileData } from '@/shared/assets/tests/mockProfileData';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'Features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            profile: {
                readonly: true,
                form: mockProfileData,
                data: mockProfileData,
            },
        }),
        // (Story: StoryFn) => (
        //     <div style={{ padding: '5rem' }}><Story /></div>
        // )
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            profile: {
                readonly: true,
                form: mockProfileData,
                data: mockProfileData,
            },
        }),
    ],
};
