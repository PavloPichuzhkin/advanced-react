import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/CurrencySelect';
import { CountrySelect } from '@/entities/CountrySelect';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Spinner } from '@/shared/ui/deprecated/Spinner';

export const ProfileCardLoaderDeprecated = memo(
    ({ className }: ProfileCardProps) => {
        return (
            <HStack
                justify='center'
                max
                align='center'
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Spinner />
            </HStack>
        );
    },
);

export const ProfileCardErrorDeprecated = memo(
    ({ className }: ProfileCardProps) => {
        const { t } = useTranslation('profile');

        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Please try to refresh the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    },
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap='12'
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify='center' max>
                    <AvatarDeprecated
                        src={data?.avatar}
                        size={150}
                        border='40%'
                        fallbackInverted
                    />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Your Firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                autofocus={!readonly}
                data-testid='ProfileCard.firstname'
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Your Lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.lastname'
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Your age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Your username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Avatar link')}
                onChange={onChangeAvatar}
                readonly={readonly}
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
    );
});
