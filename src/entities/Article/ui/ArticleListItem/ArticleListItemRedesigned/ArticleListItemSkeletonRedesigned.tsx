import { memo } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleView } from '../../../model/consts/articleConsts';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemSkeletonRedesigned = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <Card
                    padding='24'
                    max
                    className={classNames(cls.ArticleListItemRedesigned, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid='ArticleListItem'
                    // border='6px'
                >
                    <VStack gap='16'>
                        <HStack max gap='12' justify='between'>
                            <HStack gap='12'>
                                <Skeleton border='50%' height={30} width={30} />
                                <Skeleton width={150} height={24} />
                            </HStack>
                            <Skeleton width={100} height={24} />
                        </HStack>
                        <Skeleton width='50%' height={40} />
                        <Skeleton width='90%' height={32} />
                        <Skeleton width='100%' height={300} />
                        <Skeleton width='100%' height={96} />
                        <HStack max gap='12' justify='between'>
                            <Skeleton height={42} width={150} />
                            <Skeleton height={32} width={80} />
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card} padding='0'>
                    <Skeleton width='100%' className={cls.img} />
                    <VStack gap='8' className={cls.infoWrapper}>
                        <Skeleton width='100%' height={96} />
                        <HStack max justify='between'>
                            <Skeleton width={100} height={28} />
                            <Skeleton width={60} height={32} />
                        </HStack>
                        <HStack gap='12' align='center' className={cls.Avatar}>
                            <Skeleton
                                width={30}
                                height={30}
                                border='50%'
                                // className={cls.Avatar}
                            />
                            <Skeleton width={80} height={24} />
                        </HStack>
                    </VStack>
                </Card>
            </div>
        );
    },
);
