import type { Preview } from '@storybook/react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-react-router-v6';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';
import i18nextStoryDecorator from '../../src/shared/config/storybook/i18nextStoryDecorator';
import i18n from '../../src/shared/config/i18n/i18n';
import { PartialStoreDecorator } from '../../src/shared/config/storybook/StoreProviderDecorator';
import { AsyncStoryDecorator } from '@/shared/config/storybook/AsyncStoryDecorator';
import { notificationHandler } from '@/entities/Notification/testing';
import { articleCommentsMSWHandler } from '@/entities/Comments/testing';
import { DesignSwitcherDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { articleDetailsMSWHandler } from '@/entities/Article/testing';
import { userMSWHandler } from '@/entities/User/testing';
import { articleRatingMSWHandler } from '@/features/ArticleRating/testing';
import { articlesMSWHandler } from '@/pages/ArticlesPage/testing';
// import { AsyncStoryDecorator } from '../../src/shared/config/storybook/AsyncStoryDecorator';

initialize({
    onUnhandledRequest: 'bypass',
    // onUnhandledRequest(request) {
    //     const url = request.url.pathname;
    //
    //     if (url.includes('localhost') || url.includes('api.com'))
    //         console.log(
    //             `Found an unhandled ${request.method} request to ${url}`,
    //         );
    // },
});

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
        theme: {
            description: 'Global theme for components',
            defaultValue: Theme.LIGHT,
            // defaultValue: undefined,
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: Theme.LIGHT, title: 'Light' },
                    { value: Theme.DARK, title: 'Dark' },
                    { value: Theme.DANGER, title: 'Danger' },
                ],
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
        loaders: [mswLoader],
        layout: 'fullscreen',
        loki: {
            captureDelay: 1500, // 3000
        },
        msw: {
            handlers: {
                articleDetails: articleDetailsMSWHandler,
                articleRating: articleRatingMSWHandler(0),
                comments: articleCommentsMSWHandler,

                articles: articlesMSWHandler,

                notifications: notificationHandler,

                user: userMSWHandler,
                // profile: profileHandlers, // disabled in EditableProfileCard
            },
        },
    },
    decorators: [
        // TestDecorator('111111'),
        StyleDecorator,
        i18nextStoryDecorator,

        // AsyncStoryDecorator,
        ThemeDecorator(),
        // InitUserDecorator(),
        DesignSwitcherDecorator(),

        // RouterDecorator,
        withRouter, // makes rerender, reactRouter without it don't work in story
        // LoadingDecorator,
        PartialStoreDecorator(),
        mswDecorator,
        AsyncStoryDecorator,
        // TestDecorator('2222222'),
    ],
};
export default preview;
