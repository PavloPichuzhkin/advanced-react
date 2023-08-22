import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'Pages/Articles/ArticlesPage',
    component: ArticlesPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
    args: {},
    // decorators: [ThemeDecorator(Theme.DARK),
    //     PartialStoreDecorator({
    //         profile: {
    //             form: {
    //                 first: 'Pavlo',
    //             },
    //         },
    //     })],
};
