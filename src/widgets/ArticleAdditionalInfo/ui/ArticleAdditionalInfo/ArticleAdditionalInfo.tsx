import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    canEdit: boolean;
    onEditArticle: () => void;
    onBackToList: () => void;
}

export const ArticleAdditionalInfo = memo(
    ({
        className,
        author,
        createdAt,
        views,
        canEdit,
        onEditArticle,
        onBackToList,
    }: ArticleAdditionalInfoProps) => {
        const { t } = useTranslation('articles');

        return (
            <VStack max gap='24' className={classNames('', {}, [className])}>
                <Button variant='outline' onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle}>{t('Edit article')}</Button>
                )}
                <HStack align='center' gap='12'>
                    <Avatar src={author.avatar} size={32} />
                    <AppText text={author.username} bolt />
                    <AppText text={createdAt} />
                </HStack>

                <AppText text={t('{{count}} views', { count: views })} />
                <AppText text={t('{{count}} views', { count: 0 })} />

                <AppText text={t('{{count}} views', { count: 1 })} />

                <AppText text={t('{{count}} views', { count: 2000000 })} />
                <AppText text={t('{{count}} views', { count: 2000002 })} />
            </VStack>
        );
    },
);
