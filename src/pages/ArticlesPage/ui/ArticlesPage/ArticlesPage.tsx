import { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts';
import { ArticleViewSelectorContainer } from '../ArticleViewSelectorContainer/ArticleViewSelectorContainer';
import { ArticlesFiltersContainer } from '../ArticlesFiltersContainer/ArticlesFiltersContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);

    const content = (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <StickyContentLayout
                    left={<ArticleViewSelectorContainer />}
                    right={<ArticlesFiltersContainer />}
                    content={
                        <Page
                            data-testid='ArticlesPage'
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticlePageGreeting />
                            <ArticleInfiniteList className={cls.list} />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid='ArticlesPage'
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlePageGreeting />
                    <ArticlesPageFilters className={cls.sticky} />
                    <ArticleInfiniteList />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
