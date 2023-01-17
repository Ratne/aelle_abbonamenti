import React from 'react'
import { classByArray } from '../../../functions/function'
import DateInputCustom from '../dateInput/DateInputCustom'
import TimeInputCustom from '../timeInput/TimeInputCustom'

interface InputProps {
  error?: boolean
  name: string
  value: any
  type: string
  changeValue: (
    data: any,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void
}

const Textarea = ({
  changeValue,
  type,
  name,
  error,
  value,
  ...rest
}: InputProps) => {
  const changeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (changeValue) {
      changeValue(event.target.value, event)
    }
  }
  const classArray = ['form-control shared-textArea', ...(error ? ['error'] : [])]
  return (
    <>
      <textarea
        className={classByArray(classArray)}
        name={name}
        value={value}
        onChange={changeInput}
        {...rest}
      />
    </>
  )
}

export default Textarea
