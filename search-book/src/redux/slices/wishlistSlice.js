import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//server-side pagination
//client-side pagination

/* 
    const key = "a";
    const obj = {a:1}
    console.log(obj.a);
    console.log(obj[key]);

    const key2 = "b";

    const obj2 = {
        b:2;
    }

    const obj2 = {
        [key2]:2
    }
    

*/

//get wishlist from localstorage
//add book to wishlist, update localtorage
//delete book from wishlist, update localstorage
//prev, next, any page

// dispatch(loadWishlist())

/* 
    redux core: dispatch function instead, action function will be received by the thunk, thunk will invoke that function, thunk will dispatch another action 
    createAsyncThunk: dispatch function(created by createAsyncThunk) instead, this function will be received by thunk, you cannot dispatch an action
                        by yourself, instead, RTK is going to dispatch three lifecycle actions for you
*/

export const loadWishlist = createAsyncThunk("wishlistSlice/loadWishlist", async () => {
    //get the wishlist from localStorage
    const result = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return result;
});


export const addBookToWishlist = createAsyncThunk("wishlistSlice/addBookToWishlist", async (newBook, { getState, rejectWithValue }) => {
    const { wishlist } = getState().wishlistSlice;
    if (wishlist.find(item => item.id === newBook.id)) {
        return rejectWithValue("book existed!")
    }
    const newWishlist = [newBook, ...wishlist];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));//side-effect
    return newWishlist;
});

export const deleteBookFromWishlist = createAsyncThunk("wishlistSlice/deleteBookFromWishlist", async (id, { getState }) => {
    const { wishlist } = getState().wishlistSlice;
    const newWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist))//side-effect
    return newWishlist;//after deleting the book
})

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
        wishlist: [],
        wishlistForCurPage:[],
        totalPages: 0,
        currentPage: 1,
        itemsPerPage: 5,
    },
    reducers: {
        nextPage: (state, action) => {
            if ( state.currentPage < state.totalPages) {
                state.currentPage = state.currentPage + 1;
                state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);
               
            }
        },
        prevPage: (state, action) => {
            if (state.currentPage > 1) {
                state.currentPage = state.currentPage - 1;
                state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);
            }
        },
        changePage: (state, action) => {
            if (!isNaN(action.payload) && action.payload >= 1 && action.payload <= state.totalPages) {
                state.currentPage = action.payload;
                state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);
            }
        },
    },
    extraReducers: {
        [loadWishlist.fulfilled]: (state, action) => {
            state.wishlist = action.payload;
            state.totalPages = Math.ceil(state.wishlist.length / state.itemsPerPage);
            state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);
            //console.log("sliceResult",state.wishlist.slice((state.currentPage-1)*state.itemsPerPage,state.currentPage*state.itemsPerPage))
        },
        [addBookToWishlist.fulfilled]: (state, action) => {
            state.wishlist = action.payload;
            state.totalPages = Math.ceil(state.wishlist.length / state.itemsPerPage);
            state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);
        },
        [addBookToWishlist.rejected]: (state, action) => {
            alert(action.payload);
        },
        [deleteBookFromWishlist.fulfilled]: (state, action) => { //6 total, 5 itemsPerPage, 2nd only 1 item
            state.wishlist = action.payload;
            const prevTotalPages = state.totalPages;//2
            state.totalPages = Math.ceil(state.wishlist.length / state.itemsPerPage);//1
            if (prevTotalPages !== state.totalPages && state.currentPage === prevTotalPages) {//you need to move the user to previous page
                state.currentPage = state.currentPage - 1;
            }
            state.wishlistForCurPage = state.wishlist.slice((state.currentPage - 1) * state.itemsPerPage,state.currentPage*state.itemsPerPage);

        }
    }
});

export default wishlistSlice.reducer;

export const { nextPage, prevPage, changePage } = wishlistSlice.actions

