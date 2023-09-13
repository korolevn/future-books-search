import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { URL, API_KEY } from "./const";

export const fetchBook = createAsyncThunk("book/fetchBook", async (id) => {
    try {
        return await fetch(`${URL}/${id}?key=${API_KEY}`)
        .then(res => res.ok ? res.json() : Promise.reject("Error"));
    } catch (e) {
        return  "Error loading data from server";
    }
});

export const bookSlice = createSlice({
    name: "book",
    initialState: {
        book: {},
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchBook.pending]: state => {
            state.status = "loading";
            state.error = null;
        },
        [fetchBook.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.book = action.payload;
        },
        [fetchBook.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.error;
        },
    }
});

export const selectBook = state => state.book;

export default bookSlice.reducer;