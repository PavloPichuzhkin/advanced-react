import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AnimatedDrawer } from '@/shared/ui/deprecated/Drawers';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button
            className={cls.trigger}
            onClick={onOpenDrawer}
            as='div'
            theme={ButtonTheme.CLEAR}
        >
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                {isOpen && (
                    <AnimatedDrawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList className={cls.notificationsMob} />
                    </AnimatedDrawer>
                )}
            </MobileView>
        </>
    );
});
