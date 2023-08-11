import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'enteties/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentsList } from 'enteties/Comments';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import {
    getArticleComments,
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/getComments';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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
    const commentsError = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

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
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={`${t('Comments')}:`} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
