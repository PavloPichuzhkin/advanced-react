// https://www.letsbuildui.dev/articles/how-to-animate-mounting-content-in-react/
import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMountTransition } from './useMountTransition';
import { Button } from '../Button';
import './Example.scss';
import cls from './Example.module.scss';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Example = (props: ModalProps) => {
    const { className, children, isOpened, onClose, lazy } = props;

    const hasTransitionedIn = useMountTransition(isOpened, 1000);
    const { t } = useTranslation('about');
    const mods: Mods = {
        [cls.opened]: isOpened,
        // [cls.isClosing]: isClosing,
    };
    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            {/* {(hasTransitionedIn || isOpened) && ( */}
            <div
                className={classNames(
                    cls.Modal,
                    mods,
                    // {},
                    [
                        className,
                        toggleFeatures({
                            name: 'isAppRedesigned',
                            on: () => cls.modalNew,
                            off: () => cls.modalOld,
                        }),
                    ],
                )}
            >
                <Overlay onClick={onClose} />
                {(hasTransitionedIn || isOpened) && (
                    <div
                        className={classNames(cls.content, {
                            [cls.visible]: isOpened,
                            [cls.in]: hasTransitionedIn,
                        })}
                    >
                        {children}
                    </div>
                )}
                {/* <div */}
                {/*    className={classNames( */}
                {/*        cls.content, */}
                {/*        // { [cls.transition]: isMounted }, */}
                {/*        {}, */}
                {/*        [], */}
                {/*    )} */}
                {/* > */}
                {/*    {children} */}
                {/* </div> */}
            </div>
            {/* )} */}
        </Portal>
    );
};
// export const Example = ({ isOpened, onClose }: ModalProps) => {
//     const hasTransitionedIn = useMountTransition(isOpened, 1000);
//     const { t } = useTranslation('about');
//
//     return (
//         <div className='container'>
//             <Button onClick={onClose}>
//                 {`${isOpened ? 'Hide' : 'Show'} Element`}
//             </Button>
//
//             <div className='content'>
//                 {(hasTransitionedIn || isOpened) && (
//                     <div
//                         className={classNames(cls.card, {
//                             [cls.in]: hasTransitionedIn,
//                             [cls.visible]: isOpened,
//                         })}
//                     >
//                         {t(
//                             'This is a new easier variant of Modal UI component',
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export const Example = ({ isOpened, onClose }: ModalProps) => {
//     const hasTransitionedIn = useMountTransition(isOpened, 1000);
//     const { t } = useTranslation('about');
//
//     return (
//         <div className='container'>
//             <Button onClick={onClose}>
//                 {`${isOpened ? 'Hide' : 'Show'} Element`}
//             </Button>
//
//             <div className='content'>
//                 {(hasTransitionedIn || isOpened) && (
//                     <div
//                         className={`card ${hasTransitionedIn && 'in'} ${
//                             isOpened && 'visible'
//                         }`}
//                     >
//                         {t(
//                             'This is a new easier variant of Modal UI component',
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export const Example = () => {
//     const [isMounted, setIsMounted] = useState(false);
//     const hasTransitionedIn = useMountTransition(isMounted, 1000);
//     const { t } = useTranslation('about');
//
//     return (
//         <div className='container'>
//             <Button onClick={() => setIsMounted(!isMounted)}>
//                 {`${isMounted ? 'Hide' : 'Show'} Element`}
//             </Button>
//
//             <div className='content'>
//                 {(hasTransitionedIn || isMounted) && (
//                     <div
//                         className={`card ${hasTransitionedIn && 'in'} ${
//                             isMounted && 'visible'
//                         }`}
//                     >
//                         {t(
//                             'This is a new easier variant of Modal UI component',
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
