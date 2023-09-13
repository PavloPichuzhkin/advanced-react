import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comments';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
                : <Text text={t('There are no comments')} />}
        </VStack>
    );
});
