import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Button theme={ButtonTheme.CLEAR}>
                    <Card
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        className={cls.tab}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                    >

                        {tab.content}

                    </Card>
                </Button>
            ))}
        </div>
    );
});
