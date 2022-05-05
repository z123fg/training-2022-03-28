import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCurrentPage, incrementCurrentPage } from "../../redux/slices/searchbookSlice";
import "./Pagination.css"

const Pagination = ({ children/* , totalItems, currentPage, handleChangePage, */, itemsPerPage }) => {
    //console.log("children",<div></div>,children)//children is just JSX

    const currentPage = useSelector(state=>state.searchbookSlice.currentPage);
    const totalItems = useSelector(state=>state.searchbookSlice.totalItems);

    const dispatch = useDispatch();

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const handleClickPrev = () => {
        if (currentPage <= 1) {
            return;
        }
        //handleChangePage(currentPage - 1);
        dispatch(decrementCurrentPage())
    }

    const handleClickNext = () => {
        if (currentPage >= totalPages) {
            return;
        }
        //handleChangePage(currentPage + 1);
        dispatch(incrementCurrentPage())
    }
    return (
        <div className="pagination__container">
            {children}
            <div className="button-set">
                {
                    totalPages>1&&<><button disabled={currentPage <= 1} onClick={handleClickPrev}>Prev</button>
                        <span>{currentPage}</span>
                        <button disabled={currentPage >= totalPages} onClick={handleClickNext}>Next</button>
                    </>
                }

            </div>
        </div>
    )
}

export default Pagination;