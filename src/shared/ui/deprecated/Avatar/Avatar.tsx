import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
// import defaultAvatar from '@/shared/assets/tests/storybook.jpg';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    border?: string;
    fallbackInverted?: boolean;
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
export const Avatar = memo(
    ({
        className,
        // src = defaultAvatar,
        src,
        size,
        alt,
        border,
        fallbackInverted,
    }: AvatarProps) => {
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
            <Icon
                inverted={fallbackInverted}
                width={size}
                height={size}
                Svg={UserIcon}
            />
        );
        // broke in LocalStorage user - avatar link to check errorFallback for example in AvatarDropdown

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
