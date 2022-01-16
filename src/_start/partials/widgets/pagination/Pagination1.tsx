/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

type Props = {
    handleClick: Function;
    totalItems: number;
};

const colorPDF = '#F1416C';
const colorCSV = '#FFC700';
const colorXLS = '#20D489';
const colorODS = '#A2A7F7';
const colorOTHER = '#00A3FF';
const colorUNDEFINED = '#dbdbdb';

const Pagination1: React.FC<Props> = ({ handleClick, totalItems }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const total = totalItems;
    const perPage = 10;

    const numPages = parseInt(`${total / perPage}`);

    const changePage = (e: any) => {
        const elem = e.currentTarget;
        const elemID = elem.id;
        let newPage;

        switch (elemID) {
            case 'prev':
                newPage = currentPage - 1;
                break;
            case 'next':
                newPage = currentPage + 1;
                setCurrentPage(currentPage + 1)
                break;
            default:
                const elem = elemID.split('_');
                newPage = parseInt(elem[1]);
                break;
        }

        setCurrentPage(newPage);
        handleClick({ newPage, numPages });
    }

    if (!totalItems) return (
        <ul className="pagination">
            <li className="page-item previous disabled">
                <a id="prev" onClick={(e) => changePage(e)} className="page-link">
                    <i className="previous"></i>
                </a>
            </li>
            <li className={`page-item active disabled`}>
                <a onClick={(e) => changePage(e)} className="page-link">
                    ...
                </a>
            </li>
            <li className="page-item next disabled">
                <a id="next" onClick={(e) => changePage(e)} className="page-link">
                    <i className="next"></i>
                </a>
            </li>
        </ul>
    );

    const getPageList = (totalPages: number, page: number, maxLength: number) => {
        if (maxLength < 5) throw "maxLength must be at least 5";

        function range(start: number, end: number) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            // no breaks in list
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            // no break on left of page
            return range(1, maxLength - sideWidth - 1)
                .concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            // no break on right of page
            return range(1, sideWidth)
                .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        let result = range(1, sideWidth)
            .concat(0, range(page - leftWidth, page + rightWidth),
                0, range(totalPages - sideWidth + 1, totalPages));

        // Breaks on both sides
        return result;
    }

    let pages = getPageList(numPages, currentPage, 8);

    return (
        <ul className="pagination">
            <li className={`page-item previous ${currentPage === 1 ? 'disabled' : ''}`}>
                <a id="prev" onClick={(e) => changePage(e)} className="page-link">
                    <i className="previous"></i>
                </a>
            </li>
            {
                pages.map((num, i) => {
                    let page: any = num;
                    if (page === 0) { page = '...' }
                    return (
                        <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={`pagination_${i}`}>
                            <a id={`item_${page}`} onClick={(e) => { if (page !== '...') changePage(e) }} className="page-link">
                                {page}
                            </a>
                        </li>
                    )
                })
            }
            <li className={`page-item next ${currentPage === numPages ? 'disabled' : ''}`}>
                <a id="next" onClick={(e) => changePage(e)} className="page-link">
                    <i className="next"></i>
                </a>
            </li>
        </ul>
    );
};

export { Pagination1 };