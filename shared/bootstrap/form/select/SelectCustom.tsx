import React, {ReactNode} from 'react'
import {classByArray} from '../../../functions/function'

export interface OptionsModel {
    value: string;
    label: string;
    disabled?: boolean
}

interface SelectProps {
    rightTemplate?: ReactNode
    changeValue: (data: any) => void
    value: any
    error?: boolean
    options: OptionsModel[]
    defaultValue?: {
        label?: string
        isDefault: boolean
        disabled?: boolean
        value?: any
    }
}

const SelectCustom = ({
                          changeValue,
                          value,
                          options,
                          defaultValue = {label: 'Seleziona', isDefault: true, disabled: true},
                          error, rightTemplate
                      }: SelectProps) => {
    const optionsData = [
        ...(defaultValue.isDefault
            ? [
                {
                    value: -1,
                    label: defaultValue.label || 'Seleziona',
                    disabled: !!defaultValue.disabled,
                },
            ]
            : []),
        ...options,
    ]
    const onChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeValue(event.target.value != '-1' ? event.target.value : undefined)
    }
    const classArray = ['sh form-control', ...(error ? ['error'] : [])]

    return (
        <div className="sh input-group">

            <select
                className={classByArray(classArray)}
                onChange={onChangeAction}
                value={value !== undefined ? value : -1}
            >
                {optionsData.map((ele, i) => (
                    <option value={ele.value} key={i} disabled={ele.disabled}>
                        {ele.label}
                    </option>
                ))}
            </select>
            {rightTemplate && <span className="input-group-text" id="basic-addon2">
                    {rightTemplate}
                </span>}
        </div>
    )
}

export default SelectCustom
