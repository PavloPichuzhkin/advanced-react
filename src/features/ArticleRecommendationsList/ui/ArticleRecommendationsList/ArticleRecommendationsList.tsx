import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/deprecated/Text';
import { VirtualizedArticleList } from '@/entities/Article';
import cls from './ArticleRecommendationsList.module.scss';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('articles');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(6);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid='ArticleRecommendationsList'
                className={classNames('', {}, [className])}
            >
                <Text title={t('Recommended')} />
                <VirtualizedArticleList
                    isLoading={isLoading}
                    articles={articles}
                    target='_blank'
                    virtualized={false}
                    className={cls.recommendations}
                />
                {/* <ArticleList */}
                {/*    isLoading={isLoading} */}
                {/*    articles={articles} */}
                {/*    target="_blank" */}
                {/*    className={cls.recommendations} */}
                {/* /> */}
            </VStack>
        );
    },
);
