import { rest } from 'msw';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { Article, ArticleView } from '@/entities/Article';
import { ArticlesPageSchema } from '../..';
import { isStoryNameIncludes } from '@/shared/lib/mock-server/isStoryNameIncludes';

export const articlesMSWHandler = [
    rest.get(`${__API__}/articles`, (req, res, ctx) => {
        const { searchParams } = req.url;
        const limit = searchParams.get('_limit');
        const page = searchParams.get('_page');

        if (isMockLoading()) {
            return res(
                ctx.status(200),
                ctx.json(
                    selectEntitiesFromNormalizedData(
                        mockReturnArticlesPageState({
                            isLoading: true, // won't work, slice fulfilled rewrite,
                            // dispatch like in articleDetailsMSWHandler
                        }),
                    ) as Article[],
                ),
            );
        }
        if (isMockError()) {
            return res(ctx.status(500), ctx.json({}));
        }
        if (isStoryNameIncludes('not-found')) {
            return res(ctx.status(200), ctx.json([]));
        }
        if (isStoryNameIncludes('big-view')) {
            return res(
                ctx.status(200),
                ctx.json(
                    selectEntitiesFromNormalizedData(
                        mockReturnArticlesPageState({ view: ArticleView.BIG }),
                    ),
                ),
            );
        }

        return res(
            ctx.status(200),
            ctx.json(
                selectEntitiesFromNormalizedData(
                    mockReturnArticlesPageState({} as ArticlesPageSchema),
                ) as Article[],
            ),
        );
    }),
];
