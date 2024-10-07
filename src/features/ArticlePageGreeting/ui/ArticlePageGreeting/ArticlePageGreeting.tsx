import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawers';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';

/**
 * `ArticlePageGreeting` is a memoized functional component that displays a greeting message to the user when they visit the articles page for the first time.
 * It uses the `useTranslation` hook from `react-i18next` to provide localized strings for the greeting.
 * The greeting is displayed in a `Modal` or a `Drawer` depending on whether the device is mobile or not.
 * The state of whether the articles page was opened before is stored using the `useJsonSettings` hook.
 * The `ToggleFeatures` component is used to switch between the old and new design of the app.
 */

const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setTimeout(() => setIsOpen(true), 2000);
            // setIsOpen(true); // Here Modal css transitions problem

            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const text = (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <AppText
                    title={t('Welcome to the articles page!')}
                    text={t(
                        'Here you can search and view articles on various topics',
                    )}
                />
            }
            off={
                <Text
                    title={t('Welcome to the articles page!')}
                    text={t(
                        'Here you can search and view articles on various topics',
                    )}
                />
            }
        />
    );

    if (isMobile) {
        return isOpen ? (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        ) : null;
    }

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose}>
                {text}
            </Modal>
        )
    );
});
export default ArticlePageGreeting;
