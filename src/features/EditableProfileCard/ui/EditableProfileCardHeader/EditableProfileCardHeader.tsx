import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    memo, useCallback, useState, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

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
        <HStack max justify="between" align="center" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    disabled={!!validateErrors?.length && myTimeout}
                                    data-testid="EditableProfileCardHeader.SaveButton"

                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"

                                >
                                    {t('Cancel')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
