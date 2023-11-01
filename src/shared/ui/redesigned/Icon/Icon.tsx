import { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    selected?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick?: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        selected = false,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, { [cls.selected]: selected }, [
                !clickable ? className : '',
            ])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type='button'
                className={classNames(cls.button, {}, [className])}
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
