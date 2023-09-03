import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'enteties/Article';
import { VirtualizedArticleList } from 'enteties/Article/ui/ArticleList/VirtualizedArticleList';
import cls from './ArticleRecommendationsList.module.scss';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const {
        isLoading,
        data: articles,
        error,
    } = useArticleRecommendationsList(5);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <>
            <Text
                title={t('Recommended')}
            />
            <VirtualizedArticleList
                isLoading={isLoading}
                articles={articles}
                target="_blank"
                virtualized={false}
                className={cls.recommendations}
            />
            {/* <ArticleList */}
            {/*    isLoading={isLoading} */}
            {/*    articles={articles} */}
            {/*    target="_blank" */}
            {/*    className={cls.recommendations} */}
            {/* /> */}
        </>
    );
});
