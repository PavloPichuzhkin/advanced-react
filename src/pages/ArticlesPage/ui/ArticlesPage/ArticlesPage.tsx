import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleList } from 'enteties/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageHasMore, getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
    className?: string
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);
    const [searchParams] = useSearchParams();

    // const onChangeView = useCallback(
    //     (view: ArticleView) => {
    //         const sameView = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView === view;
    //         if (!sameView && hasMore) {
    //             dispatch(articlesPageActions.setView(view));
    //             dispatch(articlesPageActions.clearArticles());
    //             dispatch(fetchArticlesList({ page: 1 }));
    //         }
    //
    //         if (!sameView && !hasMore) {
    //             dispatch(articlesPageActions.setView(view));
    //         }
    //     },
    //     [dispatch, hasMore],
    // );
    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch, hasMore]);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(initArticlesPage(searchParams));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters className={cls.sticky} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
