import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import defaultAvatar from 'shared/assets/tests/storybook.jpg';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    border?: string;
}

export const Avatar = memo(({
    className,
    src = defaultAvatar,
    size,
    alt,
    border,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        borderRadius: border || '50%',
    }), [border, size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});
