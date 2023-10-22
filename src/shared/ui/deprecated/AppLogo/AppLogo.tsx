import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
// import AppSvg from '@/shared/assets/icons/app-image.svg';
import AppSvg from '@/shared/assets/icons/Anonymous.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Icon } from '../Icon';

interface AppLogoProps {
    className?: string;
}

/**
 * Use new components from the redesigned folder
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack
            max
            justify='center'
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            {/* <Icon */}
            {/*    Svg={AppSvg} */}
            {/*    className={cls.appLogo} */}
            {/*    width={150} */}
            {/*    height={150} */}
            {/* /> */}
            <AppSvg className={cls.appLogo} width={150} height={150} />
        </HStack>
    );
});
