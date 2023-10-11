import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country, CountryOptions } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

// const options = [
//     { value: Country.UKRAINE, content: Country.UKRAINE },
//     { value: Country.BRITAIN, content: Country.BRITAIN },
//     { value: Country.USA, content: Country.USA },
//     { value: Country.GERMANY, content: Country.GERMANY },
//     { value: Country.NETHERLANDS, content: Country.NETHERLANDS },
//     { value: Country.FRANCE, content: Country.FRANCE },
//
// ];
const options = Object.keys(CountryOptions).map((opt) => ({
    value: opt,
    content: opt,
    disabled: false,
}));
options[options.length - 1].disabled = true;
export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                className={classNames('', {}, [className])}
                defaultValue={t('Select country')}
                label={t('Select country')}
                items={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
                direction='top right'
            />
        );
    },
);
