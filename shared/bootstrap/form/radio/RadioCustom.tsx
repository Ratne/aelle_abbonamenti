import React from 'react'

interface InputProps {
    error?: boolean
    format?: string
    name: string
    value: any
    options: any[]
    changeValue: (data: any, event: React.ChangeEvent<HTMLInputElement>) => void
    display: string
}

const RadioCustom = ({
                         changeValue,
                         name,
                         error,
                         value,
                         options,
                         display,
                         ...rest
                     }: InputProps) => {
    const classArray = ['form-control', ...(error ? ['error'] : [])]

    return (
        <div className={display}>
            {options.map((ele, i) => {
                return (
                    <div className="radio-item" key={i}>
                        <input
                            className="custom-radio"
                            type="radio"
                            value={ele.value}
                            name={name}
                            id={name + '-' + ele.value.toString()}
                            checked={rest.format === 'boolean' ? ele.value.toString() === value?.toString() : ele.value === value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const val = rest.format === 'boolean' ? event.target.value === 'true' : event.target.value;
                                changeValue(val, event)
                            }
                            }
                        />
                        <label htmlFor={name + '-' + ele.value.toString()} className="ml-6">
                            {ele.label}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default RadioCustom
