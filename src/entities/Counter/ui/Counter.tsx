import { useTranslation } from 'react-i18next';
import { memo } from 'react';
// import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterEntityActions } from '../model/slice/counterSlice';
import { useCounterEntityValue } from '../model/selectors/getCounterValue/getCounterValue';
// import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const CounterEntity = memo(() => {
    // const counterValueEntity = useSelector(getCounterValue);
    const counterValueEntity = useCounterEntityValue();
    const { t } = useTranslation();
    const { increment, decrement, add } = useCounterEntityActions();
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid='value-title-entity'>{counterValueEntity}</h1>
            <Button
                onClick={incrementHandler}
                data-testid='increment-btn-entity'
            >
                {t('increment')}
            </Button>
            <Button
                data-testid='decrement-btn-entity'
                onClick={decrementHandler}
            >
                {t('decrement')}
            </Button>
            <Button onClick={() => add(2)}>{t('add')}</Button>
        </div>
    );
});
