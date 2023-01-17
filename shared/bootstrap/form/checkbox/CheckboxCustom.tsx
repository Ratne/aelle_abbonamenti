import React from 'react'
import Checkbox from "./Checkbox";

interface InputProps {
    error?: boolean
    format?: string
    name: string
    value: any
    options: any[]
    changeValue: (data: any, event: React.ChangeEvent<HTMLInputElement>) => void
    display: string
}


const CheckboxCustom = ({
                            changeValue,
                            name,
                            error,
                            value,
                            options,
                            display,
                            ...rest
                        }: InputProps) => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(event.target.checked ? [...value, event.target.value] : value.filter((e: any) => e !== event.target.value), event);
    };

    return (
        <div className={display}>
            {options.map((ele, i) => {
                return (
                    <Checkbox key={i} value={ele.value} name={name} label={ele.label}
                              checked={value.map((ele: any) => ele.toString()).includes(ele.value)}
                              onChange={changeHandler}/>
                )
            })}
        </div>
    )
}

export default CheckboxCustom
