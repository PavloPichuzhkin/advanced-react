import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList, getArticleDetailsData } from 'enteties/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentsList } from 'enteties/Comments';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import AddCommentForm, { addComment } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    getArticleRecommendations,
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/getRecommendations';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments, getArticleCommentsIsLoading } from '../../model/selectors/getComments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    let { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const navigate = useNavigate();
    const [isHover, setIsHover] = useHover();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback(async () => {
        const resultAddComment = await dispatch(
            addComment({
                reqUrl: '/comments',
                commentForId: { articleId: article?.id || '' },
            }),
        );

        if (resultAddComment.meta.requestStatus === 'fulfilled') {
            dispatch(fetchCommentsByArticleId(article?.id));
        }
        return resultAddComment;
    }, [article?.id, dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (__PROJECT__ === 'storybook') { id = '1'; }
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {/* <Button {...setIsHover} theme={ButtonTheme.OUTLINE} onClick={onBackToList}> */}
                {/*    {isHover ? t('Back to list11111') : t('Back to list')} */}
                {/* </Button> */}
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    // size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Recommended')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text className={cls.commentTitle} title={`${t('Comments')}:`} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
