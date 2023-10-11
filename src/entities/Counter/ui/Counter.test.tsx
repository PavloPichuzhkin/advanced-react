import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/helpers/tests/componentRender/componentRender';
import { CounterEntity } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<CounterEntity />, {
            initialState: { counterEntity: { valueEntity: 10 } },
        });
        expect(screen.getByTestId('value-title-entity')).toHaveTextContent(
            '10',
        );
    });

    test('increment', () => {
        componentRender(<CounterEntity />, {
            initialState: { counterEntity: { valueEntity: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment-btn-entity'));
        // userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title-entity')).toHaveTextContent(
            '11',
        );
    });

    test('decrement', async () => {
        componentRender(<CounterEntity />, {
            initialState: { counterEntity: { valueEntity: 10 } },
        });
        await userEvent.click(screen.getByTestId('decrement-btn-entity'));
        expect(screen.getByTestId('value-title-entity')).toHaveTextContent('9');
    });
});
