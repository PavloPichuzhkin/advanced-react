import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Button } from '@/shared/ui/redesigned/Button';

interface SaveButtonProps {
    className?: string;
}

export const SaveButton = memo((props: SaveButtonProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const [myTimeout, setMyTimeout] = useState(true);
    const onSave = useCallback(() => {
        setMyTimeout(false);
        setTimeout(() => {
            setMyTimeout(true);
        }, 3000);
        dispatch(updateProfileData());
    }, [dispatch]);

    // useEffect(() => {
    //     // if (validateErrors) {
    //     //     setMyTimeout(true);
    //     setTimeout(() => {
    //         setMyTimeout(false);
    //     }, 3000);
    //     // }
    // }, []);

    return (
        <Button
            variant='outline'
            color='success'
            onClick={onSave}
            disabled={
                // !!validateErrors?.length && myTimeout
                // Boolean(
                //     validateErrors?.length,
                // ) &&
                !myTimeout
            }
            data-testid='EditableProfileCardHeader.SaveButton'
        >
            {t('Save')}
        </Button>
    );
});
