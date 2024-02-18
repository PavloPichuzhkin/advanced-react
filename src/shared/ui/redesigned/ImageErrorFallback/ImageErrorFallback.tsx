import { memo } from 'react';
// import ImageFallback from '../../../assets/icons/redesigned/ImageErrorFallback.svg';
// TODO webpack svg settings

import { Icon } from '../Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';

interface ImageErrorFallbackProps {
    className?: string;
    width?: number | string;
    height?: number;
}

export const ImageErrorFallback = memo((props: ImageErrorFallbackProps) => {
    const { className, width, height } = props;

    return (
        <Icon
            {...props}
            // width={width}
            // height={height}
            Svg={UserIcon}
        />
    );
});
