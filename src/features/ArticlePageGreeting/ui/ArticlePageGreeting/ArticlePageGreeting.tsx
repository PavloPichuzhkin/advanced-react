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

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
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
            <Modal lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Modal>
        )
    );
});
