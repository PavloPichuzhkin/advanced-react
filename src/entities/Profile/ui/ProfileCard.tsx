import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Country, CountrySelect } from '@/entities/CountrySelect';
import { Currency, CurrencySelect } from '@/entities/CurrencySelect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../model/types/profile';
import cls from './ProfileCard.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

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
    }

    if (error) {
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
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Card
                    max
                    padding='24'
                    className={classNames(cls.ProfileCardRedesigned, {}, [
                        className,
                    ])}
                >
                    <VStack max gap='32'>
                        {data?.avatar && (
                            <HStack justify='center' max>
                                <Avatar
                                    src={data?.avatar}
                                    size={120}
                                    border='40%'
                                />
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
            }
            off={
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
            }
        />
    );
};
