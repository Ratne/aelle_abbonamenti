import React from 'react'

import {ToastProps} from '../models/ToastProps'
import ToastPropsStyle from "../../../models/ToastProps";
import ToastMsg from "../../../ToastMsg";
import {colorTheme} from "../../../../../colorUtils";

const styleError: ToastPropsStyle = {
    style: {color: '#fff', bgColor: colorTheme.danger},
    icon: {color: 'white', ico: 'error'},
}

const ToastError = ({
                        className,
                        title,
                        body,
                        closeAction,
                        ...rest
                    }: ToastProps) => {
    return (
        <ToastMsg
            className="shared-toastError"
            toastStyle={styleError}
            title={title}
            body={body}
            closeAction={() => closeAction && closeAction()}
        ></ToastMsg>
    )
}

export default ToastError
