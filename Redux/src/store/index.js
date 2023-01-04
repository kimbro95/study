import { createStore, } from 'redux';

const initialState = { counter: 0, isShow: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            isShow: state.isShow,
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            isShow: state.isShow,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            isShow: state.isShow,
        };
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            isShow: !state.isShow,
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;