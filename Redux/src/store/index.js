import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, isShow: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.isShow = !state.isShow;
        },
    }
});

// configureStore - 여러개의 reducer를 하나의 reducer로 합칠 수 있다.
const store = configureStore({
    //reducer: { counter : counterSlice}
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;