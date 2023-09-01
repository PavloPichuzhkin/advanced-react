import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './GeneratedSliced.module.scss';
import { memo } from 'react';

interface GeneratedSlicedProps {
    className?: string;
}

export const GeneratedSliced = memo((props: GeneratedSlicedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.GeneratedSliced, {}, [className])}>
           {t('GeneratedSliced')}
        </div>
    );
});
