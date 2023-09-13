import {configureStore} from "@reduxjs/toolkit";
import booksSlice from "../features/booksSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
    }
})