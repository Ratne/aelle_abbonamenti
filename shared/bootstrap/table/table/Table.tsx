import React, {useEffect, useState} from "react";

import {TableProps} from "../models/TableProps";
import TableHeader from "./components/table-header/TableHeader";
import TableBody from "./components/table-body/TableBody";
/*
import Pagination from "./components/pagination/Pagination";
*/
import {mergeClass} from "../../../utils/htmlUtils";
import Pagination from "./components/pagination/Pagination";
import {IconSVG} from "../../../ui/icon/IconSVG";

const Table = ({
                   children,
                   data = [],
                   styleTable = "",
                   columns,
                   templates = {},
                   clickRow,
                   rowIndexActive = [],
                   elementsForPage = 8,
               }: TableProps) => {
    const columnsFilter = columns.filter((col) => col.show !== false);
    const [page, setPage] = useState<number>(1);
    const [elementForPage] = useState<number>(elementsForPage);
    const [filterData, setFilterData] = useState<{ [key: string]: any }[]>(data);
    useEffect(() => {
        goPage(1);
    }, [data]);
    useEffect(() => {
        setFilterData(
            data.filter(
                (ele, index) =>
                    index >= (page - 1) * elementForPage && index < page * elementForPage
            )
        );
    }, [data, elementForPage, page]);
    const goPage = (number: number) => {
        setPage(number);
        setFilterData(
            data.filter(
                (ele, index) =>
                    index >= (number - 1) * elementForPage &&
                    index < number * elementForPage
            )
        );
    };

    return (
        <>
            <div className="table-responsive">
                {data && data.length > 0 ? <>
                    <table className={mergeClass("table table-custom mt-3", styleTable)}>
                        <TableHeader columns={columnsFilter}/>
                        <TableBody
                            clickRow={clickRow}
                            columns={columnsFilter}
                            data={filterData}
                            templates={templates}
                            rowIndexActive={rowIndexActive}
                        />
                    </table>
                    <div style={{minHeight: "75px"}}>
                        {data.length > elementForPage && (
                            <Pagination
                                elements={data.length}
                                page={page}
                                elementForPage={elementForPage}
                                goPage={goPage}></Pagination>
                        )}
                    </div>
                </> : <div className={'d-flex flex-column align-items-center p-5'}>
                    <IconSVG icon={'empty_found'} size={'156px'}/>
                    <h4 className={'mt-3'}>Nessun elemento trovato</h4></div>}
            </div>
        </>
    );
};
export default Table;
