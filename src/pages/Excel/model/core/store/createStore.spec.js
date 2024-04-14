import { createStore } from './createStore';

const initialState = {
    count: 0,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return { ...state, count: state.count + 1 };
    }
    return state;
};

describe('createStore:', () => {
    let store;
    let handler;

    beforeEach(() => {
        store = createStore(reducer, initialState);
        handler = jest.fn();
    });

    test('should return store object', () => {
        expect(store).toBeDefined();
        expect(store.dispatch).toBeDefined();
        expect(store.subscribe).toBeDefined();
        expect(store.getState).not.toBeUndefined();
    });

    test('should return object as a state', () => {
        expect(store.getState()).toBeInstanceOf(Object);
    });

    test('should return default state', () => {
        expect(store.getState()).toEqual(initialState);
    });

    test('should change state if action exists', () => {
        store.dispatch({ type: 'ADD' });
        expect(store.getState().count).toBe(1);
    });

    test("should NOT change state if action don't exists", () => {
        store.dispatch({ type: 'NOT_EXISTING_ACTION' });
        expect(store.getState().count).toBe(0);
    });

    test('should call subscriber function', () => {
        store.subscribe(handler);

        store.dispatch({ type: 'ADD' });

        expect(handler).toHaveBeenCalled();
        expect(handler).toHaveBeenCalledWith(store.getState());
    });

    test('should NOT call sub if unsubscribe', () => {
        const sub = store.subscribe(handler);

        sub.unsubscribe();

        store.dispatch({ type: 'ADD' });

        expect(handler).not.toHaveBeenCalled();
    });

    test('should dispatch in async way', () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                store.dispatch({ type: 'ADD' });
            }, 500);

            setTimeout(() => {
                expect(store.getState().count).toBe(1);
                resolve();
            }, 1000);
        });
    });
});

describe('createStore', () => {
    // createStore returns an object with subscribe, dispatch, and getState methods
    it('should return an object with subscribe, dispatch, and getState methods', () => {
        const store = createStore(() => {});
        expect(typeof store).toBe('object');
        expect(typeof store.subscribe).toBe('function');
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
    });

    // subscribe method adds a listener function to the listeners array
    it('should add a listener function to the listeners array', () => {
        const rootReducer = () => {};
        const initialState = {};
        const store = createStore(rootReducer, initialState);
        const listener = jest.fn();
        const otherListener = jest.fn();

        store.subscribe(listener);
        expect(store.listeners.length).toBe(1);
        expect(store.listeners[0]).toBe(listener);

        store.subscribe(otherListener);
        expect(store.listeners.length).toBe(2);
        expect(store.listeners[1]).toBe(otherListener);
    });

    // createStore function throws an error if rootReducer is not a function
    it('should throw an error if rootReducer is not a function', () => {
        const rootReducer = null;
        const initialState = {};
        expect(() => {
            createStore(rootReducer, initialState);
        }).toThrow('rootReducer is not a function');
    });

    // createStore function throws an error if initialState is not an object
    // it('should throw an error if initialState is not an object', () => {
    //     const rootReducer = () => {};
    //     const initialState = 'invalid';
    //     expect(() => {
    //         createStore(rootReducer, initialState);
    //     }).toThrow('initialState must be an object');
    // });

    // // subscribe method throws an error if the argument is not a function
    // it('should throw an error if the argument is not a function', () => {
    //     const rootReducer = () => {};
    //     const initialState = {};
    //     const store = createStore(rootReducer, initialState);
    //     const invalidListener = 'invalid';
    //     expect(() => {
    //         store.subscribe(invalidListener);
    //     }).toThrow('Listener must be a function');
    // });
});
