import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CounterContext, increment } from "../../../App";
import { addBookToWishlist } from "../../../redux/slices/wishlistSlice";
import BookInfo from "./BookInfo/BookInfo";
import "./SearchResult.css"



const SearchResult = () => {
  const items = useSelector(state => state.searchbookSlice.bookList);
  let [searchParams, setSearchParams] = useSearchParams();

  /* let { dispatchCtx } = useContext(CounterContext);
  
  const handleClick = () => {
    dispatchCtx(increment())
  } */
  return (
    <>
     {/*  <button onClick={handleClick}>increment</button> */}
      <ul className="search-result__container">
        {items.map(item => (
          <BookInfo key={item.id} item={item} />
        ))}
      </ul>
    </>

  );
};

export default SearchResult