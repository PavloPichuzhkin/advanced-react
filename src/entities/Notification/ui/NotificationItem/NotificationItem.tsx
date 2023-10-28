import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppText } from '@/shared/ui/redesigned/Text';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const [isHover, { onMouseEnter, onMouseLeave }] = useHover();

    const content = (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Card
                    variant='outlined'
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <AppText
                        title={item.title}
                        text={item.description}
                        hover={isHover}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            }
        />
    );

    if (item.href) {
        return (
            <a
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                className={cls.link}
                target='_blank'
                href={item.href}
                rel='noreferrer'
            >
                {content}
            </a>
        );
    }

    return content;
});
