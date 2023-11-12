import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AdditionalInfoContainer.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { getCanUserEditArticle } from '../../model/selectors/getCanUserEditArticle';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    ({ className }: AdditionalInfoContainerProps) => {
        const article = useSelector(getArticleDetailsData);
        const navigate = useNavigate();
        const canEdit = useSelector(getCanUserEditArticle);
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const error = useSelector(getArticleDetailsError);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEdit = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        // if (!article || error) {
        //     return null;
        // }

        return (
            <Card
                padding='24'
                className={classNames(cls.AdditionalInfoContainer, {}, [
                    className,
                ])}
            >
                <ArticleAdditionalInfo
                    article={article}
                    // author={article?.user}
                    // createdAt={article.createdAt}
                    // views={article.views}
                    onEditArticle={onEdit}
                    onBackToList={onBackToList}
                    canEdit={canEdit}
                    isLoading={isLoading}
                    error={error}
                />
            </Card>
        );
    },
);
