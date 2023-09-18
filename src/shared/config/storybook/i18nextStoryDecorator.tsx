import { StoryContext, StoryFn } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

const i18nextStoryDecorator = (Story: StoryFn, context: StoryContext) => {
    const { locale } = context.globals;

    // When the locale global changes
    // Set the new locale in i18n
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        // This catches the suspense from components not yet ready (still loading translations)
        // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};

export default i18nextStoryDecorator;
