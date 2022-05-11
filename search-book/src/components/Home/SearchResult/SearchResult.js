import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToWishlist } from "../../../redux/slices/wishlistSlice";
import BookInfo from "./BookInfo/BookInfo";
import "./SearchResult.css"



const SearchResult = () => {
  const items = useSelector(state => state.searchbookSlice.bookList);
  console.log("items", items)
  return (
    <ul className="search-result__container">
      {items.map(item => (
        <BookInfo key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SearchResult