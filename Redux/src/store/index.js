import { createStore, } from 'redux';

// redux 식별자 오타를 내고 싶지 않다면, 상수를 생성하여 사용한다.
export const INCREMENT = 'increment';

const initialState = { counter: 0, isShow: true };

const counterReducer = (state = initialState, action) => {
    /* 
    redux에서는 절대 기존의 state를 변경해서는 안된다.
    새로운 state객체를 반환하여 항상 재정의해야한다.
    */
    if (action.type === INCREMENT) {
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