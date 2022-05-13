import React, { useContext, useEffect, useState } from "react";
import { searchbook } from "../../apis/searchbook";
import Searchbox from "./Searchbox/Searchbox";
import SearchResult from "./SearchResult/SearchResult";
import "./Home.css"
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/slices/searchbookSlice";
import { CounterContext } from "../../App";
import { useSearchParams } from "react-router-dom";

//lift the state, props drilling
//

const Home = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.searchbookSlice.currentPage);
    const totalItems = useSelector(state => state.searchbookSlice.totalItems);
    const itemsPerPage = useSelector(state => state.searchbookSlice.itemsPerPage);
    const totalPages = useSelector(state => state.searchbookSlice.totalPages);

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        setSearchParams({...searchParams.getAll,page:currentPage})
    },[currentPage])


    const {counter} = useContext(CounterContext);

    console.log("counter",counter);
    const handleClickPrev = () => {
        dispatch(changePage(currentPage - 1))
    }

    const handleClickNext = () => {
        dispatch(changePage(currentPage + 1))
    }

    const handleClickPage = (targetPage) => {
        dispatch(changePage(targetPage));
    }
    return (
        <div className="home__container">
            <Searchbox />
            <Pagination
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}
                totalItems={totalItems}
                currentPage={currentPage}
                handleClickPage={handleClickPage}
            >
                <SearchResult />
            </Pagination>

        </div>
    );
};

export default Home
