import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Spinner } from '@/shared/ui/Spinner';
import { Avatar } from '@/shared/ui/Avatar';
import { Country, CountrySelect } from '@/entities/CountrySelect';
import { Currency, CurrencySelect } from '@/entities/CurrencySelect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
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

    if (isLoading) {
        return (
            <HStack justify="center" max align="center" className={classNames(cls.ProfileCard, { }, [className, cls.loading])}>
                <Spinner />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Please try to refresh the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max gap="12" className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} size={150} border="40%" />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Your Firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                autofocus={!readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your Lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"

            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Your username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
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
};
