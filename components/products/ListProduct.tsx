import React from 'react';
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

const ListProduct = ({listProd}: { listProd: any[] }) => {

    const tableStructure: TableData[] = [
        {
            name: "plan",
            label: "Plan",
        },
        {
            name: "subscription",
            label: "Billing Period",
        },
        {
            name: "price",
            label: "Price",
        },
        {
            name: "pricingModel",
            label: "Pricing Model",
        },
        {
            name: "Trial Period",
            label: "Trial Period",
        },
        {
            name: "action",
            label: "",
            width: "10%"
        },
    ];
    const templates: TemplateTable = {
        plan: (value, row) => (
            <div className={'d-flex flex-column'}><span>{row.name || '-'}</span>
                <span className={'text-gray-dark'}>{row.description || '-'}</span></div>
        ),
        price: (value, row) => (
            <span>{row.price + '€' || '-'}</span>
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
                    <Table columns={tableStructure} data={listProd} templates={templates} elementsForPage={50}/>
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
