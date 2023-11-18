import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { useModalTransition } from '@/shared/lib/hooks/useModalTransition/useModalTransition';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 800;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const { hasTransitionedIn, isClosing, close } = useModalTransition({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
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
};
