import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export const ThrowErrorButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.BACKGROUND_INVERTED}
        >
            {t('Throw error')}
        </Button>
    );
};
