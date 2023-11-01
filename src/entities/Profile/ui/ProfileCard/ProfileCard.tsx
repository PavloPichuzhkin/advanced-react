import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Country, CountrySelect } from '@/entities/CountrySelect';
import { Currency, CurrencySelect } from '@/entities/CurrencySelect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import {
    ProfileCardErrorRedesigned,
    ProfileCardRedesignedSkeleton,
    ProfileCardRedesigned,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';
import {
    ProfileCardDeprecated,
    ProfileCardErrorDeprecated,
    ProfileCardLoaderDeprecated,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';

export interface ProfileCardProps {
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
    const { isLoading, error } = props;

    if (isLoading) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ProfileCardRedesignedSkeleton {...props} />}
                off={<ProfileCardLoaderDeprecated {...props} />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ProfileCardErrorRedesigned {...props} />}
                off={<ProfileCardErrorDeprecated {...props} />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
