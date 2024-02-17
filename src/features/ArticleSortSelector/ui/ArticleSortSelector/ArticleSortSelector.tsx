import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppText } from '@/shared/ui/redesigned/Text';

// TODO consider using dependency cruiser

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('increasing'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('date of creation'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('name'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('viewing'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <VStack gap='12'>
                        <AppText text={`${t('Sort by')}:`} />
                        <ListBox<ArticleSortField>
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox<SortOrder>
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
            off={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select<ArticleSortField>
                        options={sortFieldOptions}
                        label={t('Sort by')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select<SortOrder>
                        options={orderOptions}
                        label={t('by')}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                    />
                </div>
            }
        />
    );
});
