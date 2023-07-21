import { fireEvent, screen } from '@testing-library/react';
// import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/helpers/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { CounterEntity } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<CounterEntity />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<CounterEntity />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        // userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<CounterEntity />, {
            initialState: { counter: { value: 9 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
