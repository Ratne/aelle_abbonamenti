import {classByArray} from '../../../functions/function'
import {IconSVG} from "../../../ui/icon/IconSVG";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline' | 'default' | 'danger' | 'danger-outline'
    className?: string
    icon?: string
    iconSize?: string
    iconRight?: string
    tintColor?: string
}

function BtnDefault({
                        children,
                        variant = 'default',
                        className = '',
                        icon,
                        iconRight,
                        tintColor,
                        iconSize = "16px",
                        ...rest
                    }: ButtonProps) {
    const classList = classByArray(['sh btn', `btn-${variant}`, className])
    return (
        <button type="button" className={classList} {...rest}>
            {icon && <IconSVG icon={icon} size={iconSize} className={`${children ? 'me-2' : ''}`}
                              tintColor={tintColor}/>}
            {children}
            {iconRight && (
                <IconSVG icon={iconRight} size={iconSize} className={`${children ? 'ms-2' : ''}`}
                         tintColor={tintColor}/>
            )}
        </button>
    )
}

export default BtnDefault
