import { memo } from 'react';
// import { t } from 'i18next'; // Assistant how to connect i18next nameSpace in this import case
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import cls from './NotificationList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';

interface ErrorNotificationListProps {
    className?: string;
    message: string;
}

export const NotificationListMessage = memo(
    (props: ErrorNotificationListProps) => {
        const { className, message } = props;
        const { t } = useTranslation();

        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <AppText
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                        align={TextAlign.CENTER} // Assistant   error - align is union type
                        title={t(message)} // no translation!!! where i18n WORN
                        // no WORN with import { t } from 'i18next'; TODO configure and NS
                    />
                }
                off={
                    <Text
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                        align={TextAlign.CENTER}
                        title={t(message)}
                    />
                }
            />
        );
    },
);
