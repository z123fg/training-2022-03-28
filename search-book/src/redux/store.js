import { configureStore } from "@reduxjs/toolkit";
import searchbookReducer from "./slices/searchbookSlice";

export default configureStore({
    reducer: {
        searchbookSlice:searchbookReducer
    }
  });