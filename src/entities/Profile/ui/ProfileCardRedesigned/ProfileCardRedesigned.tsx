import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/CurrencySelect';
import { CountrySelect } from '@/entities/CountrySelect';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from '../ProfileCardDeprecated/ProfileCardDeprecated.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppText } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = memo(
    ({ className }: ProfileCardProps) => {
        return (
            <Card
                padding='24'
                max
                className={classNames(cls.ProfileCardRedesigned, {}, [
                    className,
                ])}
            >
                <VStack gap='32'>
                    <HStack max justify='center'>
                        <Skeleton border='40%' width={120} height={120} />
                    </HStack>
                    <HStack gap='32' max>
                        <VStack gap='24' max>
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                        </VStack>

                        <VStack gap='24' max>
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                            <Skeleton width='100%' height={38} />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    },
);

export const ProfileCardErrorRedesigned = memo(
    ({ className }: ProfileCardProps) => {
        const { t } = useTranslation('profile');

        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCardRedesigned, {}, [
                    className,
                    cls.error,
                ])}
            >
                <AppText
                    variant='error'
                    title={t('An error occurred while loading the profile')}
                    text={t('Please try to refresh the page')}
                    align='center'
                />
            </HStack>
        );
    },
);

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    return (
        <Card
            max
            padding='24'
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            <VStack max gap='32'>
                {data?.avatar && (
                    <HStack justify='center' max>
                        <Avatar src={data?.avatar} size={120} border='40%' />
                    </HStack>
                )}
                <HStack justify='center' gap='32' max>
                    <VStack max gap='24' className=''>
                        <Input
                            value={data?.first}
                            label={t('Your Firstname')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            autofocus={!readonly}
                            data-testid='ProfileCard.firstname'
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Your Lastname')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid='ProfileCard.lastname'
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                        <Input
                            value={data?.age}
                            label={t('Your age')}
                            onChange={onChangeAge}
                            readonly={readonly}
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                        <Input
                            value={data?.city}
                            label={t('City')}
                            onChange={onChangeCity}
                            readonly={readonly}
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                    </VStack>
                    <VStack max gap='24' className=''>
                        <Input
                            value={data?.username}
                            label={t('Your username')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Avatar link')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                            labelWhiteSpace='labelWhiteSpaceNowrap'
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
