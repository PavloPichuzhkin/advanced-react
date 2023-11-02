import { memo } from 'react';
import { t } from 'i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading, error } = useNotifications(
        null,
        // {
        //     pollingInterval: 8000,
        // },
    );

    if (isLoading) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <VStack
                        gap='16'
                        max
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        <Skeleton width='100%' border='8px' height='80px' />
                        <Skeleton width='100%' border='8px' height='80px' />
                        <Skeleton width='100%' border='8px' height='80px' />
                    </VStack>
                }
                off={
                    <VStack
                        gap='16'
                        max
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        <SkeletonDeprecated
                            width='100%'
                            border='8px'
                            height='80px'
                        />
                        <SkeletonDeprecated
                            width='100%'
                            border='8px'
                            height='80px'
                        />
                        <SkeletonDeprecated
                            width='100%'
                            border='8px'
                            height='80px'
                        />
                    </VStack>
                }
            />
        );
    }
    if (error) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <AppText
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                        align={TextAlign.CENTER}
                        title={t(
                            'An error occurred while loading the Notification',
                        )}
                    />
                }
                off={
                    <Text
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                        align={TextAlign.CENTER}
                        title={t(
                            'An error occurred while loading the Notification',
                        )}
                    />
                }
            />
        );
    }

    return (
        <VStack
            gap='16'
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
