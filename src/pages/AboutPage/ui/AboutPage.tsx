import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThrowErrorButton } from '@/app/providers/ErrorBoundary/ui/ThrowErrorButton';
import { Counter } from '@/widgets/Counter';
import { CounterEntity } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawers';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const [test, setTest] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const onModalOpen = useCallback(() => {
        setIsModalOpen(true);
    }, []);
    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);
    const onDrawerOpen = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);
    return (
        <Page data-testid='AboutPage'>
            <div>{t('About Page')}</div>
            <div>{t('description.part1')}</div>
            {/* <button type="button" onClick={() => setTest((t) => t + 1)}>Test</button> */}
            <ThrowErrorButton />
            <Counter />
            <CounterEntity />
            <Button onClick={onModalOpen}>{t('Open Modal')}</Button>
            <Button onClick={onDrawerOpen}>{t('Open Drawer')}</Button>

            {/* {isModalOpen && ( */}
            {/* <ModalNew isOpen={isModalOpen} onClose={onModalClose} lazy> */}
            {/*    <AppText */}
            {/*        title={t( */}
            {/*            'This is a new easier variant of ModalDeprecated UI component', */}
            {/*        )} */}
            {/*    /> */}
            {/* </ModalNew> */}
            {/* )} */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={onModalClose}>
                    <AppText
                        title={t(
                            'This is a new easier variant of Modal UI component',
                        )}
                    />
                </Modal>
            )}
            {isDrawerOpen && (
                <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                    <AppText
                        title={t(
                            'This is a new easier variant of Modal UI component',
                        )}
                    />
                </Drawer>
            )}
        </Page>
    );
};

export default memo(AboutPage);
