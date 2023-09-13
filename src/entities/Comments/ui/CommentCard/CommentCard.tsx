import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>

                <HStack align="center" className="">
                    <Skeleton width={30} height={30} border="45%" />
                    <Skeleton height={20} width={200} className={cls.username} border="2px" />
                </HStack>
                <Skeleton className={cls.text} width="100%" height={30} border="2px" />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>

                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : <Avatar size={30} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});