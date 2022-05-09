import React from "react";
import "./Wishlist.css";

//redux thunk
const Wishlist = ({ handleDeleteWishlist, wishlist }) => {
  console.log("wishlist",wishlist)
  return (
    <div className="wishlist__container">
        <h3>My reading wishlist({wishlist.length})</h3>
      <ul>
        {wishlist.map((item) => {
          return (
            <li key={item?.id}>
              <span>{item?.volumeInfo?.title}</span>
              <button
                onClick={() => {
                  handleDeleteWishlist(item.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
