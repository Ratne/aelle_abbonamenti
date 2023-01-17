import React, {ReactNode} from "react";
import {OptionsModel} from "../../../bootstrap/form/select/SelectCustom";

export type typeElement =
    | "input"
    | "select"
    | "checkbox"
    | "textarea"
    | "radio"
    | "progress"
    | "switch"
    | "autocomplete";
export type dataElement = Partial<{
    multiply: boolean;
    display: string;
    onBlur: (e: any) => void;
}> &
    React.HTMLProps<any>;
export type templateRowModel = (
    children: ReactNode,
    deleteArray?: () => void,
    value?: any,
    index?: number
) => ReactNode;
export type templateArrayModel = (
    children: ReactNode,
    addElementHandler?: () => void,
    title?: string
) => ReactNode;
export type deleteElementByArrayModel = (name: string, index: number) => void;


export interface OptionSelect {
    label: string;
    value: string;
    disabled?: boolean;
    checked?: boolean;
}

export interface FormControlCustomModel {
    type?: typeElement;
    isSubmit: boolean;
    errors: { [key: string]: any };
    name: string;
    options?: OptionSelect[];
    value?: any;
    changeValue?: (value?: any) => void;
    dataElement?: dataElement;
    onBlur?: (e: any) => void;
}

export interface FormGroupCustomModel extends FormControlCustomModel {
    label?: string;
    display?: string;
}

export interface FormControlCustomModelElement {
    error?: boolean;
}

export interface InputModel extends FormControlCustomModelElement {
    icon?: string;
    firstLabel?: string;
    type?: string;
    onChangeAction?: (
        data: any,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    buttonIcon?: string;
    buttonIconClick?: () => void;
}

interface TextAreaModel extends FormControlCustomModelElement {
    icon?: string;
    type?: string;
}

interface SelectModel extends FormControlCustomModelElement {
    options?: OptionsModel[];
    defaultOption?: string;
    multiply?: boolean;
    changeSelect?: (value?: any) => void;
    value?: any;
    iconAction?: boolean;
    customSelect?: boolean;
    clickAction?: () => void;
}

interface RadioModel extends FormControlCustomModelElement {
    name?: string;
    label?: string;
    checked?: boolean;
}

interface CheckBoxListModel extends FormControlCustomModelElement {
    name: string;
    options?: OptionsModel[];
    value?: string[];
    changeChecked?: (value?: any[]) => void;
}

interface SwitchModel {
    error?: boolean;
    label?: string;
    checked?: boolean;
    name: string;
    typeCheck?: string;
    changeSwitch: (value: any) => void;
}

export type inputType = InputModel & React.HTMLProps<any>;
export type TextAreaType = TextAreaModel & React.HTMLProps<any>;
export type selectType = SelectModel & React.HTMLProps<any>;
export type radioType = RadioModel & React.HTMLProps<any>;
export type checkboxListType = CheckBoxListModel & React.HTMLProps<any>;
export type switchType = SwitchModel & React.HTMLProps<any>;
