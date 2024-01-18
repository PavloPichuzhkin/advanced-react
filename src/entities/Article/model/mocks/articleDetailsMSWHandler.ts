import { rest } from 'msw';
import { mockArticleData } from './mockArticleData';
import { getRouteArticleDetails } from '@/shared/const/router';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { articleDetailsReducer } from '../../testing';
import { articleDetailsActions } from '../slice/articleDetailsSlice';
import { ArticleDetailsSchema } from '../..';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { StoreProvider } from '@/app/providers/StoreProvider';

export const articleDetailsMSWHandler = [
    rest.get(
        `${__API__}${getRouteArticleDetails(':articleId')}`,
        (req, res, ctx) => {
            // if (isMockLoading()) {
            //     return res(
            //         ctx.status(200),
            //         ctx.json({}),
            //         // ctx.json(mockArticleData),
            //         ctx.delay('infinite'),
            //     );
            // }

            if (isMockError()) {
                return res(ctx.status(500), ctx.json({}));
            }

            return res(ctx.status(200), ctx.json(mockArticleData));
        },
    ),
];
