import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleCreate } from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

interface CreateArticleButtonProps {
    className?: string;
    isButton?: boolean;
}

export const CreateArticleButton = memo((props: CreateArticleButtonProps) => {
    const { className, isButton } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onCreateArticle = useCallback(() => {
        navigate(getRouteArticleCreate());
    }, [navigate]);

    const Button = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => ButtonRedesigned, // @ts-ignore
        off: () => ButtonDeprecated,
    });

    return isButton ? (
        <Button onClick={onCreateArticle}>{t('Create article')}</Button>
    ) : (
        <div onClick={onCreateArticle}>{t('Create article')}</div>
    );
});
