import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TopScrollButton } from '@/features/TopScrollButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
    return (
        <VStack
            justify='end'
            align='center'
            max
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <TopScrollButton />
        </VStack>
    );
});
