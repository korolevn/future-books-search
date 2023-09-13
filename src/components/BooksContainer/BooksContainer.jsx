import "./BooksContainer.css";
import React from "react";
import { selectBooks } from "../../features/booksSlice";
import { useSelector } from "react-redux";
import { BookCard } from "../BookCard/BookCard";

export function BooksContainer() {
    const {status, error, books, totalItems} = useSelector(selectBooks);

    if (status === "rejected") {
        return <div>Ошибка: {error.message}. Попробуйте ещё раз</div>;
    }

    const foundedBooks = `Found ${totalItems} results`;
    const booksIsEmpty = totalItems === 0;
    const isLoaded = status === "loading";
    const isResolved = status === "resolved";
    let result;

    if (booksIsEmpty && !isLoaded) {
        if (!isResolved) {
            result = <div>Введите поисковый запрос</div>;
        }
    } else {
        result = books.map(book => {
            return <BookCard key={book.id} item={book}/>;
        });
    }

    return (
        <div className="books-container">
            <p className="books-container__results">
                {isResolved && foundedBooks}
            </p>
            <ul className="books-container__cards">{result}</ul>
        </div>
    );
}