import { configureStore } from "@reduxjs/toolkit";
import searchbookReducer from "./slices/searchbookSlice";
import wishlistReducer from "./slices/wishlistSlice"

export default configureStore({
    reducer: {
        searchbookSlice: searchbookReducer,
        wishlistSlice: wishlistReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});