import React from "react";
import FormGroupCustom from "./FormGroupCustom";


export const FormElements = ({
                                 structure,
                                 dataForm,
                                 isSubmit,
                                 changeValue,
                                 rightTemplate,
                                 style,
                                 errors
                             }: {
    structure: any;
    dataForm: any;
    isSubmit?: boolean;
    changeValue?: (data: any, val: any) => void;
    rightTemplate?: any;
    style?: any;
    errors?: any
}) => {
    return (
        <div className="row" style={style}>
            {structure.map((ele: any) => (
                <FormGroupCustom
                    key={ele.name}
                    structure={ele}
                    isSubmit={isSubmit}
                    dataForm={dataForm}
                    changeValue={changeValue}
                    errors={errors}
                />
            ))}
            {rightTemplate && rightTemplate}
        </div>
    );
};
