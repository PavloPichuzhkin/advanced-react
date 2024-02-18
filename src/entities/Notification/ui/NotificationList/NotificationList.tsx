import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { LoadingNotificationList } from './LoadingNotificationList';
import { NotificationListMessage } from './NotificationListMessage';

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
        return <LoadingNotificationList className={className} />;
    }
    if (error) {
        return (
            <NotificationListMessage
                className={className}
                // message={t('An error occurred while loading the Notification')} // Assistant working)) why?
                message='An error occurred while loading the Notification'
            />
        );
    }

    if (data === undefined || data.length === 0) {
        return (
            <NotificationListMessage
                className={className}
                message='No notifications'
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
