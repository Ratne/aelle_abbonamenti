import React from 'react';
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

const ListSubscription = ({listSub}: { listSub: any[] }) => {

    const tableStructure: TableData[] = [
        {
            name: "name",
            label: "Name",
        },
        {
            name: "products",
            label: "Products",
        },
        {
            name: "price",
            label: "Price",
        },
        {
            name: "firstPrice",
            label: "firstPrice",
        },
        {
            name: "billingEvery",
            label: "billingEvery",
        },
        {
            name: "billingTime",
            label: "billingTime",
        },
        {
            name: "billingCycles",
            label: "billingCycles",
        },
        {
            name: "action",
            label: "",
            width: "10%"
        },
    ];
    const templates: TemplateTable = {

        price: (value, row) => (
            <span>{row.price + '€' || '-'}</span>
        ),
        firstPrice: (value, row) => (
            <span>{row.firstPrice + '€' || '-'}</span>
        ),
        products: (value, row) => (
            <div>{row.products.map((ele: any, key: number) => {
                return <div key={key}>{ele.name}</div>
            })}</div>
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
                    <Table columns={tableStructure} data={listSub} templates={templates} elementsForPage={50}/>
                </div>
            </div>
        </div>
    );
};

export default ListSubscription;
