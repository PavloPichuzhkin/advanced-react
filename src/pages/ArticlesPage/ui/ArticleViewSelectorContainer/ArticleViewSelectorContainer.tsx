import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticleViewSelectorContainerProps {
    className?: string;
}

export const ArticleViewSelectorContainer = memo(
    (props: { className?: string }) => {
        const { className } = props;

        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
