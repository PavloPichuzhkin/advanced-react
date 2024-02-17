import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './TopScrollButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon2 from '@/shared/assets/icons/redesigned/arrowUp2.svg';
import CircleIcon3 from '@/shared/assets/icons/redesigned/arrowUp3.svg';

interface ScrollButtonProps {
    className?: string;
    onCLick?: () => void;
    wasSomeHeightScrolled: boolean;
    iconOpacity?: number;
}

export const ScrollButton = memo(
    ({
        className,
        onCLick,
        wasSomeHeightScrolled,
        iconOpacity,
    }: ScrollButtonProps) => {
        const CircleIcon = wasSomeHeightScrolled ? CircleIcon2 : CircleIcon3;

        return (
            wasSomeHeightScrolled && (
                <Icon
                    Svg={CircleIcon}
                    clickable
                    onClick={onCLick}
                    width={40}
                    height={40}
                    style={{
                        // opacity: String(iconOpacity),
                        opacity: iconOpacity,

                        transition: 'opacity 0.7s ease',
                    }}
                    className={classNames(cls.TopScrollButton, {}, [className])}
                />
            )
        );
    },
);
