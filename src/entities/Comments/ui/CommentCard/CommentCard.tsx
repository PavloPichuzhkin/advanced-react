import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comments';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppText } from '@/shared/ui/redesigned/Text';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    const isLoadingContent = (
        <VStack
            data-testid='CommentCard.Loading'
            gap='16'
            max
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.CommentCardRedesigned,
                    off: () => cls.CommentCard,
                }),
                {},
                [className],
            )}
        >
            <HStack align='center' className=''>
                <Skeleton width={30} height={30} border='45%' />
                <Skeleton
                    height={32}
                    width={200}
                    className={cls.username}
                    border='2px'
                />
            </HStack>
            <Skeleton width='100%' height={24} border='2px' />
        </VStack>
    );
    if (isLoading) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <Card max padding='24'>
                        {isLoadingContent}
                    </Card>
                }
                off={isLoadingContent}
            />
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Card max padding='24'>
                    <VStack
                        data-testid='CommentCard.Content'
                        gap='16'
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [
                            className,
                        ])}
                    >
                        <AppLink
                            to={getRouteProfile(comment.user.id)}
                            className={cls.header}
                        >
                            {comment.user.avatar ? (
                                <Avatar size={30} src={comment.user.avatar} />
                            ) : (
                                <Avatar size={30} />
                            )}
                            <AppText
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </AppLink>
                        <AppText text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    data-testid='CommentCard.Content'
                    gap='16'
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar ? (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        ) : (
                            <AvatarDeprecated size={30} />
                        )}
                        <Text
                            className={cls.username}
                            title={comment.user.username}
                        />
                    </AppLinkDeprecated>
                    <Text text={comment.text} />
                </VStack>
            }
        />
    );
});
