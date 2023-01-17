import React from "react";
import {TableData} from "../../../models/TableProps";

const TableHeader = ({columns}: { columns: TableData[] }) => {
    return (
        <thead>
        <tr>
            {columns.map((ele) => {
                return <th key={ele.name}>{ele.label}</th>;
            })}
        </tr>
        </thead>
    );
};
export default TableHeader;
