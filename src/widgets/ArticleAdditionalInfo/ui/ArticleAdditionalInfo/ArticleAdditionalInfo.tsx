import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Article } from '@/entities/Article';

interface ArticleAdditionalInfoProps {
    className?: string;
    article?: Article;
    // author: User;
    // createdAt: string;
    // views: number;
    canEdit: boolean;
    isLoading: boolean;
    error?: string;
    onEditArticle: () => void;
    onBackToList: () => void;
}

export const ArticleAdditionalInfo = memo(
    ({
        className,
        article,
        // author,
        // createdAt,
        // views,
        canEdit,
        isLoading,
        error,
        onEditArticle,
        onBackToList,
    }: ArticleAdditionalInfoProps) => {
        const { t } = useTranslation('articles');

        if (isLoading) {
            return (
                <VStack
                    max
                    gap='24'
                    className={classNames('', {}, [className])}
                >
                    <Skeleton width='70%' height={42} border='40px' />

                    {/* {canEdit && */}
                    <Skeleton width='70%' height={42} border='40px' />
                    {/* } */}
                    <HStack align='center' gap='12'>
                        <Skeleton border='50%' width={32} height={32} />
                        <Skeleton width={150} height={24} />
                    </HStack>
                    <Skeleton width='40%' height={24} />
                </VStack>
            );
        }
        if (!article || error) {
            return null;
        }
        return (
            <VStack max gap='24' className={classNames('', {}, [className])}>
                <Button variant='outline' onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                {/* {canEdit && ( */}
                <Button disabled={!canEdit} onClick={onEditArticle}>
                    {t('Edit article')}
                </Button>
                {/* )} */}
                <HStack align='center' gap='12'>
                    <Avatar src={article.user.avatar} size={32} />
                    <AppText text={article.user.username} bolt />
                    <AppText text={article.createdAt} />
                </HStack>

                <AppText
                    text={t('{{count}} views', { count: article.views })}
                />
                {/* <AppText text={t('{{count}} views', { count: 0 })} /> */}

                {/* <AppText text={t('{{count}} views', { count: 1 })} /> */}

                {/* <AppText text={t('{{count}} views', { count: 2000000 })} /> */}
                {/* <AppText text={t('{{count}} views', { count: 2000002 })} /> */}
            </VStack>
        );
    },
);
