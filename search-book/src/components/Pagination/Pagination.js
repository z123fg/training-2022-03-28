import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCurrentPage, incrementCurrentPage } from "../../redux/slices/searchbookSlice";
import "./Pagination.css"

const Pagination = ({
	children/* , totalItems, currentPage, handleChangePage, */,
	itemsPerPage,
	handleClickNext,
	handleClickPrev,
	totalItems,
	currentPage,
	handleClickPage
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	//3:first current last
	//2:first last
	//1:current

	//1234 5

	//12 345 67

	// prev, first page, ellipsis, current page cluster, ellipsis,last page, next
	const renderPageButtons = () => {
		const prevButtonEl = <button onClick={handleClickPrev} disabled={currentPage === 1}>Prev</button>;
		const firstPageButtonEl = totalPages >= 2 ? <button disabled={currentPage === 1} onClick={() => handleClickPage(1)}>1</button> : <></>;
		const firstEllipsisEl = currentPage >= 4 ? <>...</> : <></>;
		const leftNeighborButtonEl = currentPage >= 3 ? <button onClick={() => handleClickPage(currentPage - 1)}>{currentPage - 1}</button> : <></>;
		const currentPageButtonEl = currentPage >= 2 && currentPage <= totalPages - 1 ? <button disabled onClick={() => handleClickPage(currentPage)}>{currentPage}</button> : <></>;
		const rightNeighborButtonEl = currentPage <= totalPages - 2 ? <button onClick={() => handleClickPage(currentPage + 1)}>{currentPage + 1}</button> : <></>;
		const secondEllipsisEl = currentPage <= totalPages - 3 ? <>...</> : <></>;
		const lastPageButtonEl = totalPages >= 2 ? <button disabled={totalPages === currentPage} onClick={() => handleClickPage(totalPages)}>{totalPages}</button> : <></>;;
		const nextButtonEl = <button onClick={handleClickNext} disabled={currentPage === totalPages}>Next</button>;

		return (
			<>
				{prevButtonEl}
				{firstPageButtonEl}
				{firstEllipsisEl}
				{leftNeighborButtonEl}
				{currentPageButtonEl}
				{rightNeighborButtonEl}
				{secondEllipsisEl}
				{lastPageButtonEl}
				{nextButtonEl}
			</>
		)
	}

	return (
		<div className="pagination__container">
			{children}
			<div className="button-set">
				{/* {
                    totalPages > 1 && <><button disabled={currentPage <= 1} onClick={handleClickPrev}>Prev</button>
                        <span>{currentPage}</span>
                        <button disabled={currentPage >= totalPages} onClick={handleClickNext}>Next</button>
                    </>
                } */}
				{totalItems > 0 && renderPageButtons()}


			</div>
		</div>
	)
}

export default Pagination;