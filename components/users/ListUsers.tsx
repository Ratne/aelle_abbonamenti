import React from 'react';
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

const ListUsers = ({listUsers}: { listUsers: any[] }) => {

    const tableStructure: TableData[] = [
        {
            name: "customer",
            label: "Customer Info",
        },
        {
            name: "subscription",
            label: "Subscription Info",
        },
        {
            name: "payment",
            label: "Net Payment",
        },
        {
            name: "createdOn",
            label: "Created On",
        },
        {
            name: "address",
            label: "Billing Address",
        },
        {
            name: "action",
            label: "",
            width: "10%"
        },
    ];
    const templates: TemplateTable = {
        customer: (value, row) => (
            <span>{row.email || '-'}</span>
        ),

        action: (value, row) => (
            <div className={"d-flex justify-content-end "}> {/*da mettere bene il dropdown*/}
                <Dropdown itemTitle={<IconSVG icon={'more'} tintColor={colorTheme.gray200}
                                              size={'18px'}/>}
                          list={[{id: 'a', name: 'a', title: 'aaa', action: '', hasDivider: false}]}
                          onClickHandler={() => null}/>
            </div>
        ),
    };


    return (
        <div>
            <div className={"row justify-content-center"}>
                <div className={"col-sm-12"}>
                    <Table columns={tableStructure} data={listUsers} templates={templates} elementsForPage={50}/>
                </div>
            </div>
        </div>
    );
};

export default ListUsers;
