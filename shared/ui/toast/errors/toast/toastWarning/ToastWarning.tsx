import React from 'react'
import {ToastProps} from '../models/ToastProps'
import ToastMsg from "../../../ToastMsg";
import ToastPropsStyle from "../../../models/ToastProps";

const styleWarning: ToastPropsStyle = {
    style: {color: '#fff', bgColor: '#FAAD14'},
    icon: {color: 'white', ico: 'warning'},
}

const ToastWarning = ({
                          className,
                          title,
                          body,
                          closeAction,
                          ...rest
                      }: ToastProps) => {
    return (
        <ToastMsg
            className="shared-toastWarning"
            toastStyle={styleWarning}
            title={title}
            body={body}
            closeAction={() => closeAction && closeAction()}
        ></ToastMsg>
    )
}

export default ToastWarning
