import React from "react";
import {funcTemplate, TableData} from "../../../../models/TableProps";

const TableCol = ({
                      row,
                      col,
                      template,
                  }: {
    row: { [key: string]: any };
    col: TableData;
    template: funcTemplate;
}) => {
    const element =
        row[col.name] !== undefined || template ? (template ? template(row[col.name], row) : row[col.name]) : "-";
    return <td title={typeof element === "string" ? element : ""} width={col.width}
               style={{width: col.width}}>{element}</td>;
};
export default TableCol;
