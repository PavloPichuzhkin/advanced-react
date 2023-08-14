import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails, getArticleDetailsData } from 'enteties/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentsList } from 'enteties/Comments';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import AddCommentForm, { addComment } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleComments, getArticleCommentsIsLoading } from '../../model/selectors/getComments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    let { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(async () => {
        // dispatch(addCommentForArticle(text));
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
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={`${t('Comments')}:`} />
                <AddCommentForm onSendComment={onSendComment} />
                {/* {!!comments?.length && <AddCommentForm onSendComment={onSendComment} />} */}
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
