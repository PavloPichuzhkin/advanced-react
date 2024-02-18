import { memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../../../redesigned/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../../../redesigned/Portal';
import { toggleFeatures } from '@/shared/lib/features';
import { useModalTransition } from '@/shared/lib/hooks/useModalTransition/useModalTransition';
import { ANIMATION_DELAY } from '@/shared/const/modalAnimationDelay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, onClose, isOpen, lazy } = props;
    const { theme } = useTheme();

    const { hasTransitionedIn, isClosing, close } = useModalTransition({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });
    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    // if (lazy && !isMounted) {
    //     return null;
    // }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    // theme,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.drawerNew,
                        off: () => cls.drawerOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div
                    className={classNames(cls.content, {
                        [cls.in]: hasTransitionedIn && !isClosing,
                        [cls.isClosing]: isClosing,
                    })}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
