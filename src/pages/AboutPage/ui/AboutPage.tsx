import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThrowErrorButton } from 'app/providers/ErrorBoundary/ui/ThrowErrorButton';

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
        </div>
    );
};

export default AboutPage;
