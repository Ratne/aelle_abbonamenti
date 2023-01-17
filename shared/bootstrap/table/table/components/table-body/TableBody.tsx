import React from "react";
import {TableProps} from "../../../models/TableProps";
import TableCol from "./components/TableCol";
import {classByArray} from "../../../../../utils/htmlUtils";

const TableBody = ({
                       columns,
                       data = [],
                       templates = {},
                       rowIndexActive = [],
                       clickRow,
                   }: TableProps) => {
    return (
        <tbody>
        {data.map((row, index) => {
            const listClass = classByArray([
                ...(rowIndexActive.includes(row?._id) ? ["rowActive hilight"] : []),
                ...(clickRow ? ["row-pointer"] : []),
            ]);
            return (
                <tr
                    key={index}
                    onClick={(event: React.MouseEvent) =>
                        clickRow && clickRow(event, row, index)
                    }
                    className={listClass}>
                    {columns.map((col) => (
                        <TableCol
                            key={col.name}
                            col={col}
                            row={row}
                            template={templates[col.name]}
                        />
                    ))}
                </tr>
            );
        })}
        </tbody>
    );
};
export default TableBody;
