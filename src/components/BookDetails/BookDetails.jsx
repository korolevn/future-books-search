import React from "react";
import "./BookDetails.css";
import imageStub from "../../assets/book-stub.jpg";
import { useSelector } from "react-redux";
import { fetchBook, selectBook } from "../../features/bookSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export function BookDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {book, status, error} = useSelector(selectBook);
    const isLoaded = status === "loading";
    const {id} = useParams();
    let result;

    useEffect(() => {
        dispatch(fetchBook(id));
    }, []);

    if (status === "rejected") {
        result = <div>Ошибка: {error.message}. Попробуйте ещё раз</div>;
    }
    
    const image = book.volumeInfo?.imageLinks?.thumbnail || imageStub;
    const categories = book.volumeInfo?.categories;
    let category;
    if (categories) {
        category = categories[0];
    };
    const title = book.volumeInfo?.title;
    const authors = book.volumeInfo?.authors?.join(", ");
    const description = book.volumeInfo?.description;

    const onHandleClick = () => {
        navigate("/");
    };

    const deleteAllTags = (str) => description && str.replace(/<(\/)?\w+>/g, "");

    result =
    isLoaded ? 
        <Loader/>
    :
            <div className="book-details">
                <div className="book-details__container">
                    <div className="book-details__image-container">
                        <img className="book-details__image" src={image} alt={title} />
                    </div>
                    <div className="book-details__info-container">
                        <p className="book-details__category">{category}</p>
                        <b className="book-details__title">{title}</b>
                        <u className="book-details__authors">{authors}</u>
                        <div className="book-details__description">{deleteAllTags(description)}</div>
                    </div>
                </div>
                <button 
                    className="btn"
                    onClick={onHandleClick}
                >
                    back
                </button>
            </div>;


    return result;
}