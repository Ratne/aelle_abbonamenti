import React from "react";
import {mergeClass} from "../../utils/htmlUtils";

interface BoxFullScreenProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    show?: boolean;
    className?: string;
    loader?: boolean;
}

const BoxFullScreen = ({
                           children,
                           className,
                           show = false,
                           loader = false,
                           ...rest
                       }: BoxFullScreenProps) => {
    return (
        <>
            <div style={!show ? {display: "none"} : {}}>
                <div
                    className={mergeClass(
                        `shared-boxFullScreen${loader ? " shared-loader-custom" : ""}`,
                        className
                    )}
                    {...rest}
                ></div>
                {children}
            </div>
        </>
    );
};
export default BoxFullScreen;
