import BtnDefault from '../default/BtnDefault'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    icon?: string
    iconSize?: string
    iconRight?: string
    variant?: "secondary" | "secondary-outline"
    tintColor?: string

}

function BtnSecondary({children, variant = "secondary", ...rest}: ButtonProps) {
    return (
        <BtnDefault variant={variant} {...rest}>
            {children}
        </BtnDefault>
    )
}

export default BtnSecondary
