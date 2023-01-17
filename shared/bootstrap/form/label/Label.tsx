import React from 'react';
import {mergeClass} from "../../../functions/function";
import {LabelProps} from "../models/FormModule";


const Label = ({label, children, className, ...rest}: LabelProps) => {
    return (
        <label className={mergeClass('shared-label', className)} {...rest}>{label ? label : children}</label>
    );
}


export default Label;
