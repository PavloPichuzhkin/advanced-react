import React, { Suspense } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';
import { ModalNew } from '@/shared/ui/redesigned/Modal/experiments/ModalNew';
import LoginForm from '../LoginForm/LoginForm';
import { Example } from '@/shared/ui/redesigned/Modal/experiments/Example';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
    lazy,
}: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        {/* <LoginForm onSuccess={onClose} /> */}

        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
