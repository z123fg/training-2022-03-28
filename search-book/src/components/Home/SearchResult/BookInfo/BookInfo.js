import React from "react";
import "./BookInfo.css"
//ternary operator
//statement1?operation1:statement2?operation3:operaion4
//if else if else
const BookInfo = ({ item, handleAddWishlist }) => {
    const { authors, publisher, publishedDate, title, description } = item.volumeInfo;
    const thumbnail = item?.volumeInfo?.imageLinks?.thumbnail || ""
    return (
        <li className="item__container" onClick={() => { handleAddWishlist(item) }}>
            <div className="thumbnail__container">
                <img src={thumbnail} atl={title} />
            </div>
            <div className="item-info__container">
                <div className="info-entry">
                    <h2>{title}</h2>
                </div>
                <div className="info-entry">
                    <p><b>Authors: </b> {authors !== undefined ? authors.join(", ") : "N/A"}</p>
                </div>
                <div className="info-entry">
                    <p><b>Publisher: </b>{publisher !== undefined ? publisher : "N/A"} </p>
                </div>
                <div className="info-entry">
                    <p><b> Published date: </b> {publishedDate !== undefined ? publishedDate : "N/A"}</p>
                </div>
                <div className="info-entry">
                    <p><b>Description: </b> {description !== undefined ? description : "N/A"}</p>
                </div>
            </div>
        </li>
    );
};

export default BookInfo;