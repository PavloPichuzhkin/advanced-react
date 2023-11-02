import { useTranslation } from 'react-i18next';
import { Country } from '@/entities/CountrySelect';
import { Currency } from '@/entities/CurrencySelect';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ProfileCardErrorRedesigned,
    ProfileCardRedesigned,
    ProfileCardRedesignedSkeleton,
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
    const { isLoading, error, className } = props;

    if (isLoading) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ProfileCardRedesignedSkeleton className={className} />}
                off={<ProfileCardLoaderDeprecated className={className} />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ProfileCardErrorRedesigned className={className} />}
                off={<ProfileCardErrorDeprecated className={className} />}
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
