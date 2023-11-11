import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemRedesigned/ArticleListItemSkeletonRedesigned';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemDeprecated/ArticleListItemSkeletonDeprecated';

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ArticleListItemSkeletonRedesigned {...props} />}
                off={<ArticleListItemSkeletonDeprecated {...props} />}
            />
        );
    },
);
