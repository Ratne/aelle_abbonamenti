import { classByArray } from '../../../functions/function'

interface InputProps {
  changeValue: (data: any, event: React.ChangeEvent<HTMLInputElement>) => void
  value: any
  name: string
  minValue?: string
  maxValue?: string
  error?: boolean
}

const DateInputCustom = ({
  changeValue,
  value,
  minValue,
  maxValue,
  error,
  name,
}: InputProps) => {
  const classArray = ['form-control date-input', ...(error ? ['error'] : [])]

  return (
    <input
      name={name}
      className={classByArray(classArray)}
      type="date"
      value={value}
      min={minValue}
      max={maxValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        changeValue(event.target.value, event)
      }
    />
  )
}

export default DateInputCustom
