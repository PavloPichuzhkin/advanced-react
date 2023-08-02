import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly, getProfileValidateErrors, profileActions, updateProfileData,
} from 'enteties/Profile';
import {
    memo, useCallback, useState, useEffect, SetStateAction,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const validateErrors = useSelector(getProfileValidateErrors);

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            disabled={!!validateErrors?.length && myTimeout}
                        >
                            {t('Save')}
                        </Button>
                        <Button
                            className={cls.cancelBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Cancel')}
                        </Button>

                    </>
                )}
        </div>
    );
});
