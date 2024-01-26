import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import cls from './NotificationList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface LoadingNotificationListProps {
    className?: string;
}

export const LoadingNotificationList = memo(
    (props: LoadingNotificationListProps) => {
        const { className } = props;

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
    },
);
