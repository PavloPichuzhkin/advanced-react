import type { Preview } from '@storybook/react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { rest } from 'msw';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import {
    ThemeDecorator,
    withThemeProvider,
} from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import i18nextStoryDecorator from '../../src/shared/config/storybook/i18nextStoryDecorator';
import i18n from '../../src/shared/config/i18n/i18n';
import { StoreProviderDecorator } from '../../src/shared/config/storybook/StoreProviderDecorator';
import { AsyncStoryDecorator } from '@/shared/config/storybook/AsyncStoryDecorator';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { Article } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator';
import { TestDecorator } from '@/shared/config/storybook/TestDecorator';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
// import { AsyncStoryDecorator } from '../../src/shared/config/storybook/AsyncStoryDecorator';

initialize({
    onUnhandledRequest: 'bypass',
});

const themeTool = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => ({
        theme: {
            description: 'Global theme for components',
            // defaultValue: Theme.LIGHT,
            defaultValue: undefined,
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
    }),
    off: () => ({
        theme: {},
    }),
});

// console.log(getFeatureFlag('isAppRedesigned'));

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

        // ...themeTool,
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
            captureDelay: 6000, // 3000
        },
        msw: {
            handlers: {
                test: [
                    rest.get(`${__API__}/articles`, (_req, res, ctx) => {
                        // console.log('handler work');
                        return res(
                            ctx.json(
                                selectEntitiesFromNormalizedData(
                                    mockReturnArticlesPageState,
                                ) as Article[],
                            ),
                        );
                    }),
                ],
                test2: [
                    rest.get(`${__API__}/article-ratings`, (_req, res, ctx) => {
                        return res(ctx.json(null));
                    }),
                ],
                //
                // profile: profileHandlers,
                // articleDetails: articleDetailsHandlers,
                // articles: articleHandlers,
                // comments: commentHandlers,
                // image: imageHandlers,
                // notification: notificationHandlers,
                // rating: ratingHandlers,
                // user: userHandlers,
            },
        },
    },
    decorators: [
        StyleDecorator,
        TestDecorator('111111'),
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        i18nextStoryDecorator,
        StoreProviderDecorator,
        mswDecorator,

        // withThemeProvider,
        // ThemeDecorator(Theme.LIGHT), /// //
        //
        // withStoryOrGlobalTheme(Theme.LIGHT),
        AsyncStoryDecorator,
        FeaturesFlagsDecorator({ isAppRedesigned: false }),

        // AsyncStoryDecorator(),
        TestDecorator('222222'),
    ],
};
export default preview;
