import type { Preview } from '@storybook/react';
import StyleDecorator from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import i18nextStoryDecorator from 'shared/config/storybook/i18nextStoryDecorator';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

const preview: Preview = {
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
        // (Story) => (
        //     // This catches the suspense from components not yet ready (still loading translations)
        //     // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
        //     <Suspense fallback={<div>loading translations...</div>}>
        //         <I18nextProvider i18n={i18n}>
        //             <Story />
        //         </I18nextProvider>
        //     </Suspense>
        // ),
    ],
};

export default preview;
export const globalTypes = {
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
};
