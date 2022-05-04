import React from "react";
import BookInfo from "./BookInfo/BookInfo";
import "./SearchResult.css"



const SearchResult = ({items, handleAddWishlist}) => {
  console.log("item",items);
  return (
    <ul className="search-result__container">
      {items.map(item=>(
        <BookInfo handleAddWishlist={handleAddWishlist} key={item.id} item={item}/>
      ))}
    </ul>
  );
};

export default SearchResult