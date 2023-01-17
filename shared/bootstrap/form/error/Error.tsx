import { ErrorProps } from '../models/FormModule'
import { classByArray, mergeClass } from '../../../functions/function'

const Error = ({
  isVisible = false,
  message,
  children,
  className,
  success = false,
  ...rest
}: ErrorProps) => {
  const classList = ['shared-error']
  if (success) classList.push('success')
  return (
    <p className={mergeClass(classByArray(classList), className)} {...rest}>
      {isVisible ? (message ? message : children) : null}
    </p>
  )
}

export default Error
