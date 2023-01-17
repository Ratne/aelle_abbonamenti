import {Select2} from 'select2-react-component'
import React from 'react'
import {t} from "i18next";

interface SelectProps {
    changeValue: (data: any) => void
    value: any
    options: { value: string; label: string; disabled?: boolean }[]
    multiple?: boolean
    defaultValue?: {
        label?: string
        isDefault: boolean
        disabled?: boolean
        value?: any
    }
}

const SelectCustom2 = ({
                           changeValue,
                           value,
                           options,
                           multiple,
                           defaultValue = {label: t('form.action.select'), isDefault: true, disabled: true},
                           ...rest
                       }: SelectProps) => {
    const optionsData = [
        ...(defaultValue.isDefault
            ? [
                {
                    value: -1,
                    label: defaultValue.label || t('form.action.select') || '',
                    disabled: !!defaultValue.disabled,
                    classes: defaultValue.disabled ? 'hidden' : '',
                },
            ]
            : []),
        ...options,
    ]


    const onChangeAction = (val: any) => {
        multiple?
            changeValue(val)
            :
            changeValue(val != '-1' ? val : undefined)
    }

    return (
        <>
            <Select2
                multiple={multiple}
                //customSearchEnabled={true}
                data={optionsData}
                value={value !== undefined && value !== null ? value : -1}
                update={onChangeAction}
                {...rest}
            ></Select2>
        </>
    )
}

export default SelectCustom2
