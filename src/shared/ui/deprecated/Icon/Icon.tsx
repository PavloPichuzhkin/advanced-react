import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    fullWidth?: boolean;
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, fullWidth, ...otherProps } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
    };

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, mods, [
                className,
            ])}
            {...otherProps}
        />
    );
});
