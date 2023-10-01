import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThrowErrorButton } from '@/app/providers/ErrorBoundary/ui/ThrowErrorButton';
import { Counter } from '@/widgets/Counter';
import { CounterEntity } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const [test, setTest] = useState(0);
    return (
        <Page data-testid="AboutPage">
            <div>
                {t('About Page')}
            </div>
            <div>
                {t('description.part1')}
            </div>
            {/* <button type="button" onClick={() => setTest((t) => t + 1)}>Test</button> */}
            <ThrowErrorButton />
            <Counter />
            <CounterEntity />
        </Page>
    );
};

export default memo(AboutPage);
