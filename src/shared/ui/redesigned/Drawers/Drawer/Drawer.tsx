import { memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../../redesigned/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../../../redesigned/Portal';
import { toggleFeatures } from '@/shared/lib/features';

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

    const { isOpening, close, isClosing, isMounted } = useModal({
        animationDelay: 800,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls.isOpening]: isOpening,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Drawer, mods, [
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
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
