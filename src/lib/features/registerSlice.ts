import { createSlice } from "@reduxjs/toolkit";
import type { IRegisterState } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IRegisterState = {
    name: '',
    email: '',
    password: ''
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegisterData: (state, action: PayloadAction<IRegisterState>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        },
        clearRegisterData: (state) => {
            state.name = ''
            state.email = ''
            state.password = ''
        }
    }
})

export const { setRegisterData, clearRegisterData } = registerSlice.actions
export default registerSlice.reducer
