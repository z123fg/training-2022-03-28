import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, deleteBookFromWishlist, nextPage, prevPage } from "../../redux/slices/wishlistSlice";
import Pagination from "../Pagination/Pagination";
import "./Wishlist.css";

//redux thunk
const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlistSlice.wishlist);
  const wishlistForCurPage = useSelector(state => state.wishlistSlice.wishlistForCurPage);
  const itemsPerPage = useSelector(state => state.wishlistSlice.itemsPerPage);
  const currentPage = useSelector(state => state.wishlistSlice.currentPage);
  const totalItems = wishlist.length;
  const totalPages = useSelector(state => state.wishlistSlice.totalPages);

  const handleDeleteWishlist = (id) => {
    dispatch(deleteBookFromWishlist(id))
  }

  const handleClickNext = () => {
    dispatch(nextPage())
  }
  const handleClickPrev = () => {
    dispatch(prevPage())
  }
  const handleClickPage = (targetPage) => {
    dispatch(changePage(targetPage))
  }
  return (
    <div className="wishlist__container">
      <h3>My reading wishlist({wishlist.length})</h3>
      <Pagination
        itemsPerPage={itemsPerPage}
        handleClickNext={handleClickNext}
        handleClickPage={handleClickPage}
        handleClickPrev={handleClickPrev}
        currentPage={currentPage}
        totalItems={totalItems}
        totalPages={totalPages}>
        <ul>
          {wishlistForCurPage.map((item) => {
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
      </Pagination>

    </div>
  );
};

export default Wishlist;
