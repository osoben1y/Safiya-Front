import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./features/tokenSlice";
import registerSlice from "./features/registerSlice";

export const store = configureStore({
    reducer: {
        tokenSlice,
        registerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;