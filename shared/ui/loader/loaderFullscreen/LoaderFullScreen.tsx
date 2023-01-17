import React from "react";
import BoxFullScreen from "../../boxFullScreen/BoxFullScreen";

import Loader from "../loader/Loader";

interface LoaderProps {
    children?: React.ReactNode;
    className?: string;
    show?: boolean;
}

const LoaderFullScreen = ({children, show, className}: LoaderProps) => {
    return (
        <BoxFullScreen show={show} loader={true}>
            <div className="loader">
                <Loader></Loader>
            </div>
        </BoxFullScreen>
    );
};
export default LoaderFullScreen;
