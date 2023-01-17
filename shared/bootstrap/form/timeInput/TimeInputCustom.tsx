import { classByArray } from '../../../functions/function'

interface InputProps {
  changeValue: (data: any, event: React.ChangeEvent<HTMLInputElement>) => void
  value: any
  minValue?: string
  maxValue?: string
  error?: boolean
  name: string
}

const TimeInputCustom = ({
  changeValue,
  value,
  minValue,
  maxValue,
  error,
  name,
}: InputProps) => {
  const classArray = ['form-control time-input', ...(error ? ['error'] : [])]

  return (
    <input
      name={name}
      className={classByArray(classArray)}
      type="time"
      value={value}
      min={minValue}
      max={maxValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        changeValue(event.target.value, event)
      }
    />
  )
}

export default TimeInputCustom
