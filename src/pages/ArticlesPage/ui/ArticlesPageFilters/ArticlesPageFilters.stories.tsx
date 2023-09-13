import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'Pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        }),
    ],
};
