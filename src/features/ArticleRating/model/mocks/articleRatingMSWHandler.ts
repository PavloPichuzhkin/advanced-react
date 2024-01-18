import { rest } from 'msw';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { isStoryNameIncludes } from '@/shared/lib/mock-server/isStoryNameIncludes';
import { AvailableRate, mockArticleRating } from './mockArticleRating';

export const articleRatingMSWHandler = (rating: AvailableRate) => [
    rest.get(`${__API__}/article-ratings`, (req, res, ctx) => {
        if (isMockLoading()) {
            return res(ctx.status(200), ctx.json({}), ctx.delay('infinite'));
        }

        if (isMockError()) {
            return res(ctx.status(500), ctx.json({}));
        }

        if (isStoryNameIncludes('unrated')) {
            return res(ctx.status(200), ctx.json([]));
        }

        return res(ctx.status(200), ctx.json([mockArticleRating(rating)]));
    }),
    rest.post(`${__API__}/article-ratings`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockArticleRating(rating)));
    }),
];
