import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITokenState } from "../../types";

const initialState: ITokenState = {
    token: localStorage.getItem('x-auth-token') || null,
    user: null
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem('x-auth-token', state.token);
        },
        removeToken: (state) => {
            state.token = null
            localStorage.removeItem('x-auth-token')
        }
    }
})

export const { setToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer;