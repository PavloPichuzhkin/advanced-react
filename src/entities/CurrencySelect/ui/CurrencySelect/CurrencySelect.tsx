import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );
        const props = {
            className: classNames('', {}, [className]),
            label: t('Select currency'),
            defaultValue: t('Select currency'),
            items: options,
            value,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
            showArrow: false,
        };
        return (
            <ToggleFeatures
                feature='isAppRedesigned'
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
