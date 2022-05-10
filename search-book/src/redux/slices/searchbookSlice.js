import { createSlice } from "@reduxjs/toolkit";
import { searchbook } from "../../apis/searchbook";

//slice is like a sub-store
export const searchbookSlice = createSlice({
    name: "searchbookSlice",
    initialState: {
        searchResult: [],
        wishlist: [],
        totalItems: 0,
        currentPage: 1,
        keyword: "",
    },
    reducers: {
        loadSearchResult: async (state, action) => {
            state.searchResult = action.payload;
        },
        loadWishlist: (state, action) => {
            state.wishlist = action.payload;
        },
        addWishlist: (state, action) => {
            const prev = state.wishlist;
            const bookMap = {}; //hashMap {[id]: book}
            const nextWishlist = [action.pay, ...prev];
            nextWishlist.forEach((book) => {
                bookMap[book.id] = book;
            });
            state.wishlist = Object.values(bookMap);
        },
        deleteWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload
            );
        },
        updateTotalItems: (state, action) => {
            state.totalItems = action.payload;
        },
        incrementCurrentPage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        decrementCurrentPage: (state) => {
            state.currentPage = state.currentPage - 1;
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        }
    }
});

export const {
    loadSearchResult,
    loadWishlist,
    addWishlist,
    deleteWishlist,
    incrementCurrentPage,
    decrementCurrentPage,
    updateTotalItems,
    updateKeyword,
    updateCurrentPage
} = searchbookSlice.actions;
export default searchbookSlice.reducer;
