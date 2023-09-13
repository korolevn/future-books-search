import { URL, MAX_RESULTS, API_KEY } from "./const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export function buildRequest (params) {
    const {search, category, sorting, startIndex = 0} = params;

    let result = `q=${search}`;
    if (category && category !== "all") {
        result += `+subject:${category}`;
    }
    if (sorting) {
        result += `&orderBy=${sorting}`;
    }
    result += `&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${API_KEY}`

    return result;
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (params) => {
    try {
        return await fetch(`${URL}?${buildRequest(params)}`)
        .then(res => res.ok ? res.json() : Promise.reject(`Error`));
    } catch (e) {
        return  "Error loading data from server";
    }
});

export const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        totalItems: 0,
        status: null,
        error: null,
    },
    reducers: {
        clearBooks: (state) => {
            state.books = [];
        }
    },
    extraReducers: {
        [fetchBooks.pending]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            if (state.books.length === 0) {
                state.books = action.payload.items;
                state.totalItems = action.payload.totalItems;
            } else {
                state.books.push(...action.payload.items);
            }
        },
        [fetchBooks.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error;
        },
    }
})

export const { clearBooks } = booksSlice.actions;

export const selectBooks = state => state.books;

export default booksSlice.reducer;
