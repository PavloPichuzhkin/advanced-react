import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    // const { t } = useTranslation('profile');
    const { t } = useTranslation();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    console.log(data);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Sign in')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Sign in')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Sign in')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Sign in')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
