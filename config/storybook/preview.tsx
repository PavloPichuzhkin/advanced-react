import type { Preview } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import i18nextStoryDecorator from '../../src/shared/config/storybook/i18nextStoryDecorator';
import i18n from '../../src/shared/config/i18n/i18n';
import { StoreProviderDecorator } from '../../src/shared/config/storybook/StoreProviderDecorator';

const preview: Preview = {
    globalTypes: {
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            defaultValue: i18n.language,
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'English' },
                    { value: 'uk', title: 'Ukraine' },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        i18nextStoryDecorator,
        StoreProviderDecorator,
    ],
};

export default preview;
