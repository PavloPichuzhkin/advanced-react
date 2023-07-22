import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy: boolean;
}

export const LoginModal = ({
    className, isOpen, onClose, lazy,
}: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy={lazy}
    >
        <LoginForm />
    </Modal>
);
