import React, {useRef} from 'react'
import {classByArray} from '../../../functions/function'
import TimeInputCustom from '../timeInput/TimeInputCustom'
import InputCustomDate from "../dateInput/InputCustomDate";
import {InputCustomPropsModel} from "../models/InputCustomPropsModel";
import Checkbox from "../checkbox/Checkbox";


const InputCustom = ({
                         rightTemplate,
                         changeValue,
                         type,
                         name,
                         error,
                         value,
                         extra = {},
                         ...rest
                     }: InputCustomPropsModel) => {
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (changeValue) {
            changeValue(
                type === 'checkbox'
                    ? event.target.checked
                    : type === 'number'
                        ? +event.target.value
                        : event.target.value,
                event
            )
        }
    }
    const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(event.target.checked ? true : false, event);
    };
    const classArray = ['sh form-control', ...(error ? ['error'] : [])]
    const classString = classByArray(classArray);
    const myRef = useRef<any>();
    return (
        <>
            <div className="sh input-group">
                {(type === 'text' || type === 'password') && (
                    <input
                        className={classByArray(classArray)}
                        name={name}
                        value={value}
                        onChange={changeInput}
                        type={type}
                        {...rest}
                    />
                )}
                {type === 'checkbox' && (
                    <Checkbox
                        checked={value}
                        name={name}
                        value={value}
                        onChange={changeCheckbox}
                        {...rest}
                    />
                )}
                {type === 'date' && (
                    <InputCustomDate
                        error={error}
                        name={name}
                        value={value}
                        extra={extra}
                        type={type}
                        changeValue={changeValue}
                        classString={classString}
                    />
                )}
                {type === 'time' && (
                    <TimeInputCustom
                        error={error}
                        name={name}
                        value={value}
                        changeValue={changeValue}
                        {...rest}
                    ></TimeInputCustom>
                )}
                {rightTemplate && <span className="input-group-text" id="basic-addon2">
                    {rightTemplate}
                </span>}
            </div>
        </>
    )
}

export default InputCustom
