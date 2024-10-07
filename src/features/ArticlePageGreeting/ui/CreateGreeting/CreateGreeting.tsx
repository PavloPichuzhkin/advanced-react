import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Text } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    saveJsonSettings,
    useJsonSettings,
} from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface CreateGreetingProps {
    className?: string;
}

export const CreateGreeting = memo((props: CreateGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const [ready, setReady] = useState(false);

    const onSaveJsonSettings = async () => {
        if (authData) {
            await dispatch(saveJsonSettings({ isArticlesPageWasOpened: false }))
                .unwrap()
                .then(() => {
                    setReady(true);
                })
                .then(() => {
                    setTimeout(() => setReady(false), 5000);
                });
        }
    };

    return (
        <HStack align='center' gap='24' className={className}>
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <>
                        <AppText
                            text={t(
                                'You can create greeting for Articles Page',
                            )}
                        />
                        <Button
                            onClick={onSaveJsonSettings}
                            style={{ width: '120px' }}
                            disabled={ready}
                        >
                            {ready ? `${t('Ready')}!))` : t('Create')}
                        </Button>
                    </>
                }
                off={
                    <>
                        <Text
                            text={t(
                                'You can create greeting for Articles Page',
                            )}
                        />
                        <ButtonDeprecated onClick={onSaveJsonSettings}>
                            {t('Create')}
                        </ButtonDeprecated>
                        {ready && <Text text={`${t('Ready')}!))`} />}
                    </>
                }
            />
        </HStack>
    );
});
