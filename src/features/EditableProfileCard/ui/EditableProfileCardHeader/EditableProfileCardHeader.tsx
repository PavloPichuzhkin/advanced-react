import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
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
import { Card } from '@/shared/ui/redesigned/Card';
import { ValidateProfileError } from '../../model/consts/consts';
import { SaveButton } from './SaveButton';

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

        const validateErrorTranslates = {
            [ValidateProfileError.SERVER_ERROR]: t('Server error during save'),
            [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect region'),
            [ValidateProfileError.NO_DATA]: t('Data not specified'),
            [ValidateProfileError.INCORRECT_USER_DATA]: t(
                'First and last name are required',
            ),
            [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        };

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <Card padding='24' max>
                        <HStack
                            max
                            justify='between'
                            align='center'
                            className={classNames('', {}, [className])}
                        >
                            {validateErrors?.length ? (
                                validateErrors?.map((err) => (
                                    <AppText
                                        key={err}
                                        variant='error'
                                        title={`${validateErrorTranslates[err]}!`}
                                        data-testid='EditableProfileCard.Error'
                                    />
                                ))
                            ) : (
                                <AppText title={t('Profile')} />
                            )}

                            {canEdit &&
                                (readonly ? (
                                    <Button
                                        onClick={onEdit}
                                        data-testid='EditableProfileCardHeader.EditButton'
                                    >
                                        {t('Edit')}
                                    </Button>
                                ) : (
                                    <HStack gap='8'>
                                        {/* <Button */}
                                        {/*    variant='outline' */}
                                        {/*    color='success' */}
                                        {/*    onClick={onSave} */}
                                        {/*    disabled={ */}
                                        {/*        // !!validateErrors?.length && myTimeout */}
                                        {/*        // Boolean( */}
                                        {/*        //     validateErrors?.length, */}
                                        {/*        // ) && */}
                                        {/*        !myTimeout */}
                                        {/*    } */}
                                        {/*    data-testid='EditableProfileCardHeader.SaveButton' */}
                                        {/* > */}
                                        {/*    {t('Save')} */}
                                        {/* </Button> */}
                                        <SaveButton />
                                        <Button
                                            variant='filled'
                                            onClick={onCancelEdit}
                                            data-testid='EditableProfileCardHeader.CancelButton'
                                        >
                                            {t('Cancel')}
                                        </Button>
                                    </HStack>
                                ))}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify='between'
                        align='center'
                        className={classNames('', {}, [className])}
                    >
                        {validateErrors?.length ? (
                            validateErrors?.map((err) => (
                                <Text
                                    key={err}
                                    theme={TextTheme.ERROR}
                                    title={`${validateErrorTranslates[err]}!`}
                                    data-testid='EditableProfileCard.Error'
                                />
                            ))
                        ) : (
                            <Text title={t('Profile')} />
                        )}
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
