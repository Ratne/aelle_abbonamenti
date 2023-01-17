import React from 'react'
import {useTranslation} from 'react-i18next'
import FormControlCustom from './FormControlCustom'
import FormGroup from './form-group/FormGroup'

const FormGroupCustom = ({
                             isSubmit,
                             errors,
                             structure = {},
                             onBlur,
                             dataForm,
                             ...rest
                         }: any) => {
    const {t} = useTranslation()
    const colSize = structure?.col ? Object.keys(structure?.col).map((ele) => `col-${ele}-${structure.col[ele]}`).join(' ') : ''
    return (
        <div className={colSize}>
            <FormGroup
                display={structure.display}
                label={{label: structure.label || ''}}
                error={{
                    isVisible: isSubmit && !!errors && !!errors[structure.name],
                    message: t(
                        'errors.' + errors[structure.name]?.code,
                        errors[structure.name]?.params
                    ),
                }}
            >
                <FormControlCustom
                    isSubmit={isSubmit}
                    errors={errors}
                    structure={structure}
                    onBlur={onBlur}
                    dataForm={dataForm}
                    {...rest}
                />
            </FormGroup>
        </div>

    )
}

export default FormGroupCustom
