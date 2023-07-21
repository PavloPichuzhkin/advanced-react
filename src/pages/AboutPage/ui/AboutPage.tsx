import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThrowErrorButton } from 'app/providers/ErrorBoundary/ui/ThrowErrorButton';
import { Counter } from 'widgets/Counter';
import { CounterEntity } from 'enteties/Counter';
// import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <div>
                {t('About Page')}
            </div>
            <div>
                {t('description.part1')}
            </div>
            <ThrowErrorButton />
            <Counter />
            <CounterEntity />
        </div>
    );
};

export default AboutPage;
