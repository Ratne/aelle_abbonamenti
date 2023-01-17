import React from 'react'
import { FormGroupProps } from '../models/FormModule'
import Error from '../error/Error'
import Label from "../label/Label";


const FormGroup = ({ display, label, children, error }: FormGroupProps) => {
  return (
    <div className="form-group">
      <div className={display?.form ? display.form : ''}>
        {label && label.label ? (
          <div className={display?.label ? display.label : ''}>
            <Label {...label} />
          </div>
        ) : null}

        <div className={display?.child ? display.child : ''}>
          {children}
          {error && <Error {...error} />}
        </div>
      </div>
    </div>
  )
}

export default FormGroup
