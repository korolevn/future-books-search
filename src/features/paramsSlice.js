import { createSlice } from "@reduxjs/toolkit";

export const paramsSlice = createSlice({
    name: "params",
    initialState: {
        params: {}
    },
    reducers: {
        setParams: (state, action) => {
            state.params = action.payload;
        } 
    }
});

export const {setParams} = paramsSlice.actions;

export const selectParams = state => state.params;

export default paramsSlice.reducer;