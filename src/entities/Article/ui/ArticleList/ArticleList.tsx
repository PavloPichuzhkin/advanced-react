import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/deprecated/Card';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            // className={cls.card}
            className={toggleFeatures({
                name: 'isAppRedesigned',
                on: () => cls.cardRedesigned,
                off: () => cls.card,
            })}
            key={article.id}
            target={target}
        />
    );
    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.noArticles, {}, [className])}>
                <Card>
                    <Text size={TextSize.L} title={t('No articles found')} />
                </Card>
            </div>
        );
    }
    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid='ArticleList'
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
