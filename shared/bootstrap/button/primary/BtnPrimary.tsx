import BtnDefault from '../default/BtnDefault'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    icon?: string
    iconSize?: string
    iconRight?: string
    variant?: "primary" | "primary-outline"
    tintColor?: string
}

function BtnPrimary({children, variant = "primary", ...rest}: ButtonProps) {
    return (
        <BtnDefault variant={variant}  {...rest}>
            {children}
        </BtnDefault>
    )
}

export default BtnPrimary
