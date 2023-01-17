import React from "react";
import {Pagination as PaginationModel} from "../../../models/TableProps";
import {usePagination} from "./usePagination";
import {IconSVG} from "../../../../../ui/icon/IconSVG";

const Pagination = ({
                        elementForPage = 8,
                        page = 1,
                        elements,
                        goPage,
                    }: PaginationModel) => {
    const {items, pages, changePage} = usePagination(
        elements,
        elementForPage,
        page,
        goPage
    );
    return (
        <nav>
            <ul className={"pagination justify-content-end border-top pt-3 border-gray"}>
                <li className={`page-item firstPage ${page === 1 ? 'disabled' : ''}`} onClick={() => goPage(1)}>
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true"><IconSVG icon={'double-chevron-left'} size={'10px'}/></span>
                    </a>
                </li>
                <li className={`page-item prevPage ${page === 1 ? 'disabled' : ''}`} onClick={() => changePage()}>
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true"><IconSVG icon={'chevron-left'} size={'10px'}/></span>
                    </a>
                </li>
                {page > 5 ? <li className="page-item">
                    ...
                </li> : null}

                {items.map((number, i) => (
                    (number <= page && page - number < 5) || (number > page && number - page < 5) ?
                        <li key={i} className={`page-item ${number === page ? 'active' : ''}`}
                            onClick={() => goPage(number)}>
                            <a className="page-link" aria-label="Previous">
                                {number}
                            </a>
                        </li> : null
                ))}
                {(items.length - page) >= 5 ? <li className="page-item">
                    ...
                </li> : null}

                <li className={`page-item nextPage ${page === pages ? 'disabled' : ''}`}
                    onClick={() => changePage(true)}>
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true"><IconSVG icon={'chevron-right'} size={'10px'}/></span>
                    </a>
                </li>
                <li className={`page-item lastPage ${page === pages ? 'disabled' : ''}`}
                    onClick={() => goPage(items.length)}>
                    <a className="page-link" aria-label="Previous">
                        <span aria-hidden="true"><IconSVG icon={'double-chevron-right'} size={'10px'}/></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
