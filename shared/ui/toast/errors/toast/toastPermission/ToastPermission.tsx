import React from 'react'

import {ToastProps} from '../models/ToastProps'
import ToastPropsStyle from "../../../models/ToastProps";
import ToastMsg from "../../../ToastMsg";

const styleError: ToastPropsStyle = {
    style: {color: '#565b6f', bgColor: '#fff'},
    icon: {color: 'orange', ico: 'forbidden'},
}

const ToastPermission = ({
                             className,
                             title,
                             body,
                             closeAction,
                             ...rest
                         }: ToastProps) => {
    return (
        <ToastMsg
            className="shared-toastPermission"
            toastStyle={styleError}
            title={title}
            body={body}
            closeAction={() => closeAction && closeAction()}
        ></ToastMsg>
    )
}

export default ToastPermission
