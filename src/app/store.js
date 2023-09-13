import {configureStore} from "@reduxjs/toolkit";
import booksSlice from "../features/booksSlice";
import paramsSlice from "../features/paramsSlice";
import bookSlice from "../features/bookSlice";

export const store = configureStore({
    reducer: {
        book: bookSlice,
        books: booksSlice,
        params: paramsSlice,
    }
});