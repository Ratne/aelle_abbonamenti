import React from 'react';
import {IconSVG} from "./IconSVG";

const IconButton = ({
                        icon,
                        variant = "primary",
                        clickHandler,
                        tintColor,
                        size, iconClass
                    }: {
    icon: string, variant?: string, clickHandler: () => void, tintColor?: string, iconClass?: string
    size?: string
}) => {
    return (
        <button type="button" className={`icon-btn btn btn-${variant}`} onClick={clickHandler}>
            <IconSVG icon={icon} tintColor={tintColor} size={size} className={iconClass}/>
        </button>
    );
};

export default IconButton;
