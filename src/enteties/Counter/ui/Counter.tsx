import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { counterActionscounterEntity } from 'enteties/Counter/model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const CounterEntity = () => {
    const dispatch = useDispatch();
    const counterValueEntity = useSelector(getCounterValue);
    const { t } = useTranslation();
    console.log(counterValueEntity);
    const increment = () => {
        dispatch(counterActionscounterEntity.increment());
    };

    const decrement = () => {
        dispatch(counterActionscounterEntity.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValueEntity}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
