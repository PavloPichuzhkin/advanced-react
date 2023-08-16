import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView, ArticleViewSelector } from 'enteties/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageHasMore, getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageProps {
    className?: string
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );
    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            console.log('onLoadNextPart');
            dispatch(fetchArticlesList({ page: page + 1 }));

            dispatch(articlesPageActions.setPage(page + 1));
        }
    }, [dispatch, hasMore, isLoading, page]);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
