import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleRating } from '@/features/ArticleRating';
import { Card } from '@/shared/ui/Card';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    let { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (__PROJECT__ === 'storybook') {
        id = '1';
    }
    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article not found')}
            </Page>
        );
    }

    // const articleRatingCard = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={id ?? ''} />,
    //     off: () => <Card>{t('Article rating will be available soon!')}</Card>,
    // });
    const articleRatingCard = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating articleId={id ?? ''} />,
        off: () => <Card>{t('Article rating will be available soon!')}</Card>,
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap='16' max>
                    {/* made scroll behavior uncontrolled because of align-items prop */}
                    {/* <div className={cls.pageContainer}> */}
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {/* <ArticleRating articleId={id} /> */}
                    {articleRatingCard}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                    {/* </div> */}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
