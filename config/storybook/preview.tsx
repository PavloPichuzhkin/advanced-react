import type { Preview } from '@storybook/react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { rest } from 'msw';
import { withRouter } from 'storybook-addon-react-router-v6';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import {
    ThemeDecorator,
    withThemeProvider,
} from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import i18nextStoryDecorator from '../../src/shared/config/storybook/i18nextStoryDecorator';
import i18n from '../../src/shared/config/i18n/i18n';
import {
    PartialStoreDecorator,
    StoreProviderDecorator,
} from '../../src/shared/config/storybook/StoreProviderDecorator';
import { AsyncStoryDecorator } from '@/shared/config/storybook/AsyncStoryDecorator';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { Article } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator';
import { TestDecorator } from '@/shared/config/storybook/TestDecorator';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { InitUserDecorator } from '@/shared/config/storybook/InitUserDecorator';
import { mockNotifications } from '@/shared/assets/tests/mockNotifications';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { DesignSwitcherDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { articleDetailsMSWHandler } from '@/entities/Article/testing';
import { userMSWHandler } from '@/entities/User/testing';
import { articleRatingMSWHandler } from '@/features/ArticleRating/testing';
import { LoadingDecorator } from '@/shared/config/storybook/LoadingDecorator';
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
            captureDelay: 1000, // 3000
        },
        msw: {
            handlers: {
                test: [
                    rest.get(`${__API__}/articles`, (_req, res, ctx) => {
                        // console.log('handler  work');
                        return res(
                            ctx.json(
                                selectEntitiesFromNormalizedData(
                                    mockReturnArticlesPageState,
                                ) as Article[],
                            ),
                        );
                    }),
                ],
                articleDetails: articleDetailsMSWHandler,
                notifications: [
                    rest.get(`${__API__}/notifications`, (_req, res, ctx) => {
                        console.log('handler preview work');
                        return res(ctx.json(mockNotifications));
                    }),
                ],
                comments: [
                    rest.get('/comments', (req, res, ctx) => {
                        // if (isMockLoading()) {
                        //     return res(
                        //         ctx.status(200),
                        //         ctx.json({}),
                        //         ctx.delay('infinite'),
                        //     );
                        // }

                        return res(
                            ctx.status(200),
                            ctx.json(
                                selectEntitiesFromNormalizedData(
                                    mockReturnArticleDetailsCommentsState,
                                ),
                            ),
                        );
                    }),
                ],
                user: userMSWHandler,
                // profile: profileHandlers,
                // articleDetails: articleDetailsHandlers,
                // articles: articleHandlers,
                // comments: commentHandlers,
                // image: imageHandlers,
                // notification: notificationHandlers,
                articleRating: articleRatingMSWHandler(0),
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
        LoadingDecorator,
        PartialStoreDecorator(),
        mswDecorator,
        AsyncStoryDecorator,
        // TestDecorator('2222222'),
    ],
};
export default preview;
