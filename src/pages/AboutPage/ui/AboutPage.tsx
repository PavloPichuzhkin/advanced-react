import React from 'react';
import { useTranslation } from 'react-i18next';
import { Test } from 'entities/Test';
import { ThrowErrorButton } from 'app/providers/ErrorBoundary/ui/ThrowErrorButton';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <Test defaultCount={5} />
            <div>
                {t('About Page')}
            </div>
            <div>
                {t('description.part1')}
            </div>
            <ThrowErrorButton />
        </div>
    );
};

export default AboutPage;
