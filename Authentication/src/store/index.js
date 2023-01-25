import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import authSlice from "./auth";

const reducers = combineReducers({
    auth: authSlice.reducer,
});

const persisConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'] // 해당 reducer만 저장
    // blacklist: ['']  // 해당 reducer만 제외
};

const persistedReducer = persistReducer(persisConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;