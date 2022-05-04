import React, { useEffect, useState } from "react";
import { searchbook } from "../../apis/searchbook";
import Searchbox from "./Searchbox/Searchbox";
import SearchResult from "./SearchResult/SearchResult";
import "./Home.css"
import Pagination from "../Pagination/Pagination";
//lift the state, props drilling
//

const Home = ({ handleAddWishlist }) => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [keyword, setKeyword] = useState("");
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
                setTotalItems(result.data.totalItems)
            }
            if (result?.data?.items !== undefined) {
                setItems(result.data.items);
            }

            window.scrollTo(0,0)
        })()

    }, [currentPage, keyword])


    const handleSubmit = async (input) => {
        setKeyword(input);
        setCurrentPage(1);
        /* const result = await searchbook(input);
        if (result?.data?.totalItems !== undefined) {
            setTotalItems(result.data.totalItems)
        }
        if (result?.data?.items !== undefined) {
            setItems(result.data.items);
        } */

    } //self closing tag

    const handleChangePage = (targetPageNum) => {
        setCurrentPage(targetPageNum);

    }
    return (
        <div className="home__container">
            <Searchbox handleSubmit={handleSubmit} />
            <Pagination currentPage={currentPage} totalItems={totalItems} itemsPerPage={5} handleChangePage={handleChangePage}>
                <SearchResult handleAddWishlist={handleAddWishlist} items={items} />
            </Pagination>

        </div>
    );
};

export default Home
