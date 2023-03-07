import React from 'react';
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

const ListOffices = ({ListOffices}: { ListOffices: any[] }) => {

    const tableStructure: TableData[] = [
        {
            name: "name",
            label: "Name",
        },
        {
            name: "email",
            label: "Email",
        },

        {
            name: "action",
            label: "",
            width: "10%"
        },
    ];
    const templates: TemplateTable = {

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
                    <Table columns={tableStructure} data={ListOffices} templates={templates} elementsForPage={50}/>
                </div>
            </div>
        </div>
    );
};

export default ListOffices;
