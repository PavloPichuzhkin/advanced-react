import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useState, useEffect } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppText } from '@/shared/ui/redesigned/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: ProfilePageHeaderProps) => {
        const { className } = props;

        const validateErrors = useSelector(getProfileValidateErrors);
        const authData = useSelector(getUserAuthData);
        const profile = useSelector(getProfileData);
        const canEdit = authData?.id === profile?.id;
        const { t } = useTranslation('profile');

        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        const [myTimeout, setMyTimeout] = useState(true);

        useEffect(() => {
            if (validateErrors) {
                setMyTimeout(true);
                setTimeout(() => {
                    setMyTimeout(false);
                }, 3000);
            }
        }, [validateErrors]);

        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <HStack
                        max
                        justify='between'
                        align='center'
                        className={classNames('', {}, [className])}
                    >
                        <AppText title={t('Profile')} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <Button
                                        variant={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid='EditableProfileCardHeader.EditButton'
                                    >
                                        {t('Edit')}
                                    </Button>
                                ) : (
                                    <HStack gap='8'>
                                        <Button
                                            variant={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            disabled={
                                                // !!validateErrors?.length && myTimeout
                                                Boolean(
                                                    validateErrors?.length,
                                                ) && myTimeout
                                            }
                                            data-testid='EditableProfileCardHeader.SaveButton'
                                        >
                                            {t('Save')}
                                        </Button>
                                        <Button
                                            variant='filled'
                                            onClick={onCancelEdit}
                                            data-testid='EditableProfileCardHeader.CancelButton'
                                        >
                                            {t('Cancel')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                }
                off={
                    <HStack
                        max
                        justify='between'
                        align='center'
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Profile')} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid='EditableProfileCardHeader.EditButton'
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap='8'>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            disabled={
                                                // !!validateErrors?.length && myTimeout
                                                Boolean(
                                                    validateErrors?.length,
                                                ) && myTimeout
                                            }
                                            data-testid='EditableProfileCardHeader.SaveButton'
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid='EditableProfileCardHeader.CancelButton'
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                }
            />
        );
    },
);
