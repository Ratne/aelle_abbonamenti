import React from 'react'

import {ToastProps} from '../models/ToastProps'
import ToastMsg from "../../../ToastMsg";
import ToastPropsStyle from "../../../models/ToastProps";
import {colorTheme} from "../../../../../colorUtils";

const styleSuccess: ToastPropsStyle = {
    style: {color: '#fff', bgColor: colorTheme.success},
    icon: {color: 'green', ico: 'published_with_changes '},
}

const ToastSuccess = ({
                          className,
                          title,
                          body,
                          showToast = true,
                          closeAction,
                          ...rest
                      }: ToastProps) => {
    return (
        <ToastMsg
            showToast={showToast}
            className="shared-toastSuccess"
            toastStyle={styleSuccess}
            title={title}
            body={body}
            closeAction={() => closeAction && closeAction()}
        ></ToastMsg>
    )
}

export default ToastSuccess
