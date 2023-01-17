import React, {ReactNode} from "react";

export interface InputCustomPropsModel {
    rightTemplate?: ReactNode
    error?: boolean
    name: string
    value: any
    type: string
    extra?: any;
    disabled?: boolean
    changeValue: (data: any, event: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
}


export interface InputCustomPropsWithDetailsModel extends InputCustomPropsModel {
    classString?: string
}
