import {classByArray} from '../../../functions/function'
import BtnDefault from '../default/BtnDefault'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    icon?: string
    iconSize?: string
    iconRight?: string
    className?: string,
    variant?: "danger" | "danger-outline"
}

function BtnDanger({children, className, variant = "danger", ...rest}: ButtonProps) {
    const classList = classByArray(['btn-danger', className ? className : ''])

    return (
        <BtnDefault variant={variant} className={classList} {...rest}>
            {children}
        </BtnDefault>
    )
}

export default BtnDanger
