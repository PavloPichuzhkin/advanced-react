import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AdditionalInfoContainer.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
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

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEdit = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        if (!article) {
            return null;
        }

        return (
            <Card
                padding='24'
                border='round'
                className={classNames(cls.AdditionalInfoContainer, {}, [
                    className,
                ])}
            >
                <ArticleAdditionalInfo
                    author={article?.user}
                    createdAt={article.createdAt}
                    views={article.views}
                    onEditArticle={onEdit}
                    onBackToList={onBackToList}
                    canEdit={canEdit}
                />
            </Card>
        );
    },
);
