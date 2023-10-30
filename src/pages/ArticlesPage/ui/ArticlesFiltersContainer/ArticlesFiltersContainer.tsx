import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface ArticlesFiltersContainerProps {
    className?: string;
}

export const ArticlesFiltersContainer = memo(
    (props: { className?: string }) => {
        const { className } = props;

        const {
            sort,
            type,
            order,
            search,
            onChangeSort,
            onChangeType,
            onChangeOrder,
            onChangeSearch,
        } = useArticleFilters();

        return (
            <ArticlesFilters
                className={className}
                sort={sort}
                search={search}
                type={type}
                order={order}
                onChangeSort={onChangeSort}
                onChangeSearch={onChangeSearch}
                onChangeType={onChangeType}
                onChangeOrder={onChangeOrder}
            />
        );
    },
);
