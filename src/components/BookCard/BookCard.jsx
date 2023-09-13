import "./BookCard.css";
import imageStub from "../../assets/book-stub.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

export function BookCard({item}) {
    const image = item.volumeInfo?.imageLinks?.thumbnail || imageStub;
    const title = item.volumeInfo?.title;
    const categries = item.volumeInfo?.categories;
    let category = categries[0];
    const authors = item.volumeInfo?.authors?.join(", ");

    return (
        <li className="book-card">
            <NavLink className="book-card__container" to="">
                <img className="book-card__image" src={image} alt="" />
                <u className="book-card__category">{category}</u>
                <b className="book-card__title">{title}</b>
                <p className="book-card__authors">{authors}</p>
            </NavLink>
        </li>
    );
}