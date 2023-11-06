import React, { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/components/LibsProviders/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../../../redesigned/Overlay';
import cls from './AnimatedDrawer.module.scss';
import { Portal } from '../../../redesigned/Portal';
import { Text, TextSize } from '../../../deprecated/Text';
import { HStack } from '../../../redesigned/Stack';
import { Loader } from '../../../deprecated/Loader';
import { toggleFeatures } from '@/shared/lib/features';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = (props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();
    const { className, children, onClose, isOpen, lazy } = props;

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.AnimatedDrawer, {}, [
                    className,
                    theme,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.drawerNew,
                        off: () => cls.drawerOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}
                    {...bind()}
                >
                    <HStack justify='center' className={cls.puller}>
                        <Text title='----' size={TextSize.XL} />
                    </HStack>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();
    if (!isLoaded) {
        return <Loader />;
    }

    return <DrawerContent {...props} />;
};

export const AnimatedDrawer = memo((props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
});
