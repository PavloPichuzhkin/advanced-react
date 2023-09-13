import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { counterActionscounterEntity } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const CounterEntity = memo(() => {
    const dispatch = useDispatch();
    const counterValueEntity = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActionscounterEntity.increment());
    };

    const decrement = () => {
        dispatch(counterActionscounterEntity.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title-entity">{counterValueEntity}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn-entity"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn-entity"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
});