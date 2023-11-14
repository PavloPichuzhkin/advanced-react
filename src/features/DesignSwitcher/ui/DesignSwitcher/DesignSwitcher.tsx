import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Text } from '@/shared/ui/deprecated/Text';
import {
    getFeatureFlag,
    ToggleFeatures,
    updateFeatureFlag,
} from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface DesignSwitcherProps {
    className?: string;
}

export const DesignSwitcher = memo((props: DesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = [
        {
            content: t('New'),
            value: 'new',
            disabled: false,
        },
        {
            content: t('Old'),
            value: 'old',
            disabled: false,
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            );
            // .unwrap()
            // .then
            // //     () => {
            // //     setIsLoading(false);
            // // }
            // ();
            forceUpdate();
        }
    };

    const selectedValue = isAppRedesigned ? 'new' : 'old';
    const itemsWithDisabledValue = items.map((item) => ({
        ...item,
        disabled: item.value === selectedValue,
    }));

    return (
        <HStack align='center' gap='8'>
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <>
                        <AppText text={t('Interface variant')} />
                        {isLoading ? (
                            <Skeleton width={150} height={40} />
                        ) : (
                            <ListBox
                                onChange={onChange}
                                items={itemsWithDisabledValue}
                                value={selectedValue}
                                className={className}
                            />
                        )}
                    </>
                }
                off={
                    <>
                        <Text text={t('Interface variant')} />
                        {isLoading ? (
                            <SkeletonDeprecated width={150} height={40} />
                        ) : (
                            <ListBoxDeprecated
                                onChange={onChange}
                                items={itemsWithDisabledValue}
                                value={selectedValue}
                                className={className}
                            />
                        )}
                    </>
                }
            />
        </HStack>
    );
});
