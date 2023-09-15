import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AnimatedDrawer } from '@/shared/ui/Drawers/AnimatedDrawer/AnimatedDrawer';
import cls from './NotificationButton.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text/Text';

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
        <Button onClick={onOpenDrawer} as="div" theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                {isOpen && (
                    <AnimatedDrawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <HStack
                            justify="center"
                            className={cls.puller}
                        >
                            <Text title="----" size={TextSize.XL} />
                        </HStack>
                        <NotificationList className={cls.notificationsMob} />
                    </AnimatedDrawer>
                )}
            </MobileView>
        </>
    );
});
