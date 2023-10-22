import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, VirtualizedArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
    virtual?: boolean;
}

export const ArticleInfiniteList = memo(
    ({ className, virtual = false }: ArticleInfiniteListProps) => {
        const { t } = useTranslation();
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const view = useSelector(getArticlesPageView);
        const error = useSelector(getArticlesPageError);

        if (error) {
            return <Text text={t('An error occurred when loading articles')} />;
        }
        return virtual ? (
            <VirtualizedArticleList
                isLoading={isLoading}
                articles={articles}
                view={view}
                className={className}
            />
        ) : (
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        );
    },
);
