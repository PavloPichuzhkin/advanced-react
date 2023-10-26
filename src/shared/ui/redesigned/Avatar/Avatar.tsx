import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    border?: string;
}

export const Avatar = memo(
    ({ className, src, size, alt, border }: AvatarProps) => {
        const mods: Mods = {};

        const styles = useMemo<CSSProperties>(
            () => ({
                width: size || 100,
                height: size || 100,
                borderRadius: border || '50%',
            }),
            [border, size],
        );

        const fallback = <Skeleton width={size} height={size} border='50%' />;
        const errorFallback = (
            <Icon width={size} height={size} Svg={UserIcon} />
        );

        return (
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                alt={alt}
                style={styles}
                className={classNames(cls.Avatar, mods, [className])}
            />
        );
    },
);
