import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, isShow: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;