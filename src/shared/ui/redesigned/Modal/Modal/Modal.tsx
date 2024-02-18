import React, { ReactNode, useEffect } from 'react';
import cls from './Modal.module.scss';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { useModalTransition } from '@/shared/lib/hooks/useModalTransition/useModalTransition';
import { ANIMATION_DELAY } from '@/shared/const/modalAnimationDelay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onCloseModalFromParent?: (closeModal: () => void) => void;
}

export const Modal = React.memo((props: ModalProps) => {
    const { className, children, isOpen, onClose, onCloseModalFromParent } =
        props;

    const { hasTransitionedIn, isClosing, close } = useModalTransition({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    //
    // useEffect(() => {
    //     if (onCloseModalFromParent) {
    //         onCloseModalFromParent(close);
    //     }
    // }, [close, onCloseModalFromParent]);

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                data-testid='modal'
                className={classNames(cls.Modal, mods, [
                    className,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld,
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
