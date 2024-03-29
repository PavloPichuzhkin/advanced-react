import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import AddCommentForm, { addComment } from '@/features/AddCommentForm';
import { CommentsList } from '@/entities/Comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleDetailsData } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleComments,
    getArticleCommentsIsLoading,
} from '../../model/selectors/getComments';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation('articles');

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        const dispatch = useAppDispatch();
        const article = useSelector(getArticleDetailsData);

        useEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        }, [dispatch, id]);

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

        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature='isAppRedesigned'
                    on={<AppText className='' title={`${t('Comments')}:`} />}
                    off={<Text className='' title={`${t('Comments')}:`} />}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
