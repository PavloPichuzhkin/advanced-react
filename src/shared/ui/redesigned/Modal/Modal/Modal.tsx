/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef, ReactNode, useImperativeHandle } from 'react';
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
    lazy?: boolean;
}

/**
 * `Modal` is a React component that creates a modal dialog. It uses a `Portal` to
 * render the modal outside the normal React component tree, specifically within the `app` element
 * or the body of the document if `app` is not found.
 *
 * The modal can be opened or closed based on the `isOpen` prop.
 * The `onClose` prop is a callback function that is called when the modal is closed.
 *
 * The `className` prop allows for additional CSS classes to be applied to the modal.
 * The `children` prop is used to render any child components within the modal.
 *
 * The `lazy` prop, if true, prevents the modal from rendering when it is not open.
 *
 * The component uses the `useModalTransition` hook for handling opening and closing animations.
 */

// 2 variant
/**
 * `Modal` is a React component that creates a modal dialog.
 *
 * @component
 * @param {object} props - The properties that define the `Modal` component.
 * @param {string} props.className - An optional CSS class to apply to the modal.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @param {boolean} props.isOpen - A flag indicating whether the modal is currently open.
 * @param {function} props.onClose - A function to be called when the modal is closed.
 * @param {boolean} props.lazy - If true, the modal will not render its content until it is opened.
 * @returns {ReactNode} The `Modal` component.
 */

// solution https://bobbyhadz.com/blog/react-call-function-in-child-component
// another interesting solution https://medium.com/@abubakarmemon/pass-function-as-children-in-react-a1bac3e11d58
// https://github.com/jsx-eslint/eslint-plugin-react/issues/2786

export const Modal = React.memo(
    // forwardRef<Object, ModalProps>((props: ModalProps, ref) => {
    forwardRef((props: ModalProps, ref) => {
        const { className, children, isOpen, onClose, lazy } = props;

        const { hasTransitionedIn, isClosing, close } = useModalTransition({
            animationDelay: ANIMATION_DELAY,
            onClose,
            isOpen,
        });

        useImperativeHandle(ref, () => ({
            closeForParent: () => {
                close();
            },
        }));

        if (lazy && !isOpen) {
            return null;
        }

        const mods: Mods = {
            [cls.opened]: isOpen,
        };

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
    }),
);
