import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, isLoggedIn: false };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.isLoggedIn = !state.isLoggedIn;
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;