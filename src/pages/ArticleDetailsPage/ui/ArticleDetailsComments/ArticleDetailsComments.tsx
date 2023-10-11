import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import AddCommentForm, { addComment } from '@/features/AddCommentForm';
import { CommentsList } from '@/entities/Comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleDetailsData } from '@/entities/Article';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleComments,
    getArticleCommentsIsLoading,
} from '../../model/selectors/getComments';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation('articles');

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
        // const commentsIsLoading = true;
        // console.log(comments);

        const dispatch = useAppDispatch();
        const article = useSelector(getArticleDetailsData);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
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

        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <Text className='' title={`${t('Comments')}:`} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
