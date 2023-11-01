import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    search: string | number;
    onChangeSearch: (value: string) => void;
    type: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        type,
        sort,
        order,
        search,
        onChangeType,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
    } = props;
    const { t } = useTranslation('articles');

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            padding='20'
        >
            <VStack gap='24'>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Search')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    size='s'
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </VStack>
        </Card>
    );
});
