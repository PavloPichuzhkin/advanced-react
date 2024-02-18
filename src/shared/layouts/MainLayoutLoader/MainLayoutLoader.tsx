import { memo } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { MainLayout } from '../MainLayout/MainLayout';
import cls from './MainLayoutLoader.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export const MainLayoutLoader = memo(() => {
    return (
        <MainLayout
            className={classNames(cls.MainLayoutLoader, {}, [])}
            header={
                <VStack className={cls.header}>
                    <Skeleton width={40} height={40} border='50%' />
                </VStack>
            }
            content={
                <VStack max gap='16' className={cls.content}>
                    <Skeleton width='70%' height={32} border='16px' />
                    <Skeleton width='70%' height={32} border='16px' />
                    <Skeleton width='99%' height='25%' border='16px' />
                    <Skeleton width='99%' height='35%' border='16px' />
                    <Skeleton className={cls.last} width='99%' border='16px' />
                </VStack>
            }
            sidebar={<Skeleton border='32px' width={220} height='100%' />}
        />
    );
});
