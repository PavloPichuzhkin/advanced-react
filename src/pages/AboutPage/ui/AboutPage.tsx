import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThrowErrorButton } from 'app/providers/ErrorBoundary/ui/ThrowErrorButton';
import { Counter } from 'widgets/Counter';
import { CounterEntity } from 'enteties/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const [test, setTest] = useState(0);
    return (
        <div>
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
        </div>
    );
};

export default memo(AboutPage);
