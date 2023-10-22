import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs';

import { ArticleType } from '../../../../entities/Article/model/consts/articleConsts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('articles');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('All articles'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Economy'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Science'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
