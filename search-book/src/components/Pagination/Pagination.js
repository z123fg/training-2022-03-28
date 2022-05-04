import React from "react";
import "./Pagination.css"

const Pagination = ({ children, totalItems, currentPage, handleChangePage, itemsPerPage }) => {
    //console.log("children",<div></div>,children)//children is just JSX

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const handleClickPrev = () => {
        if (currentPage <= 1) {
            return;
        }
        handleChangePage(currentPage - 1);
    }

    const handleClickNext = () => {
        if (currentPage >= totalPages) {
            return;
        }
        handleChangePage(currentPage + 1);
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