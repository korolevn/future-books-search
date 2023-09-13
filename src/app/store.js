import {configureStore} from "@reduxjs/toolkit";
import booksSlice from "../features/booksSlice";
import paramsSlice from "../features/paramsSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        params: paramsSlice,
    }
});