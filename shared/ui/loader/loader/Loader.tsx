import React from "react";
import {classByArray, mergeClass} from "../../../utils/htmlUtils";

interface LoaderProps {
    className?: string;
    size?: string;
}

const Loader = ({className = "", size = ""}: LoaderProps) => {
    const classMerge = classByArray([size, className]);
    return (
        <div className={mergeClass("lds-spinner", classMerge)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
export default Loader;
