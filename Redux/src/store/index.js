import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    }
});

// configureStore - 여러개의 reducer를 하나의 reducer로 합칠 수 있다.
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;