import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'enteties/Article';
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
    } = useArticleRecommendationsList(4);

    // console.log(articles);
    if (isLoading || error) {
        return null;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                title={t('Recommended')}
            />
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                target="_blank"
            />
        </div>
    );
});
