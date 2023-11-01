import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import { AppText } from '../Text';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value, direction = 'row' } = props;
    const { t } = useTranslation('articles');

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
        >
            <AppText text={`${t('Types')}:`} />
            {tabs.map((tab) => {
                const selected = tab.value === value;
                return (
                    <Card
                        variant={selected ? 'light' : 'primary'}
                        className={classNames(cls.tab, {
                            [cls.selected]: selected,
                        })}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        border='round'
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
