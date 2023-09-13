import "./LoadMoreButton.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectParams } from "../../features/paramsSlice";
import { fetchBooks } from "../../features/booksSlice";

export function LoadMoreButton() {
    const [startIndex, setStartIndex] = useState(0);
    const dispatch = useDispatch();
    const {params} = useSelector(selectParams);
    
    const handleOnClick = () => {
        setStartIndex(startIndex + 30);

        dispatch(fetchBooks(
            {...params, startIndex: startIndex + 30}
        ));
    };

    return (
        <button
            className="btn load-more-button"
            onClick={handleOnClick}
        >
            Load more
        </button>
    );
}