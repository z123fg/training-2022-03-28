import React, { useEffect, useState } from "react";
import { searchbook } from "../../apis/searchbook";
import Searchbox from "./Searchbox/Searchbox";
import SearchResult from "./SearchResult/SearchResult";
import "./Home.css"
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchResult, updateTotalItems } from "../../redux/slices/searchbookSlice";
//lift the state, props drilling
//

const Home = ({ handleAddWishlist }) => {
    //const [items, setItems] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalItems, setTotalItems] = useState(0);
    // const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const items = useSelector(state=>state.searchbookSlice.searchResult);
    const keyword = useSelector(state=>state.searchbookSlice.keyword);
    const currentPage = useSelector(state=>state.searchbookSlice.currentPage);
    const totalItems = useSelector(state=>state.searchbookSlice.totalItems);


    //totalPage:totalPage=totalItems/itemsPerPage, itemsPerPage = 5 ,totalItems,
    /* 
        totalItems:10
        itemsPerPage:4;
        totalPage = 10/4 = Math.ceil(10/4) = 4 (Math.floor(),Math.round())
    */
    console.log("totalItems", totalItems);

    useEffect(() => {
        (async () => {
            if(keyword==="") return;
            const result = await searchbook(keyword, currentPage, 5);
            if (result?.data?.totalItems !== undefined) {
                //setTotalItems(result.data.totalItems)
                dispatch(updateTotalItems(result.data.totalItems));
            }
            if (result?.data?.items !== undefined) {
                //setItems(result.data.items);
                dispatch(loadSearchResult(result.data.items))
            }

            window.scrollTo(0,0)
        })()

    }, [currentPage, keyword])


    // const handleSubmit = async (input) => {
    //     setKeyword(input);
    //     setCurrentPage(1);
    //     /* const result = await searchbook(input);
    //     if (result?.data?.totalItems !== undefined) {
    //         setTotalItems(result.data.totalItems)
    //     }
    //     if (result?.data?.items !== undefined) {
    //         setItems(result.data.items);
    //     } */

    // } //self closing tag

    // const handleChangePage = (targetPageNum) => {
    //     setCurrentPage(targetPageNum);

    // }
    return (
        <div className="home__container">
            <Searchbox /* handleSubmit={handleSubmit} */ />
            <Pagination /* currentPage={currentPage} totalItems={totalItems} */ itemsPerPage={5} /* handleChangePage={handleChangePage} */>
                <SearchResult handleAddWishlist={handleAddWishlist} items={items} />
            </Pagination>

        </div>
    );
};

export default Home
