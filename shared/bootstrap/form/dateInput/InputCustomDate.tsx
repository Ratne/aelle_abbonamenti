import React from 'react'
import DateInputCustom from './DateInputCustom'
import {InputCustomPropsWithDetailsModel} from "../models/InputCustomPropsModel";

const InputCustomDate = ({
                             changeValue,
                             type,
                             name,
                             classString,
                             error,
                             value,
                             extra = {},
                             ...rest
                         }: InputCustomPropsWithDetailsModel) => {
    return (
        <>
            <DateInputCustom
                error={error}
                name={name}
                value={value}
                changeValue={changeValue}
                {...rest}
            />
        </>
    )
}

export default InputCustomDate
