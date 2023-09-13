import "./Header.css";
import { options } from "./const";
import React from "react";
import { useState } from "react"
import { Search } from "../Search/Search";
import { Select } from "../Select/Select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setParams } from "../../features/paramsSlice";
import { clearBooks, fetchBooks } from "../../features/booksSlice";

export function Header() {
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState("relevance");
    const [category, setCategory] = useState("computers");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        navigate("/");

        dispatch(setParams({
            search,
            category,
            sorting
        }));
        dispatch(clearBooks());
        dispatch(fetchBooks({
            search,
            category,
            sorting
        }));
    }

    return (
        <div className="books-header">
            <div className="books-header__container">
                <h1 className="books-header__heading">Search for books</h1>
                <form
                    className="search-form"
                    onSubmit={handleOnSubmit}
                >
                <Search
                        value={search}
                        setValue={setSearch}
                    />
                <div className="select-container">
                    <Select
                        value={sorting}
                        setValue={setSorting}
                        options={options.sorting}
                    >
                        Sorting by
                    </Select>
                    <Select
                        value={category}
                        setValue={setCategory}
                        options={options.category}
                    >
                        Categories
                    </Select>
                </div>
                </form>
            </div>
        </div>
    );
}