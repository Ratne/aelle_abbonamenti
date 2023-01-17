import React from 'react'
import {ToastProps} from '../models/ToastProps'
import ToastSuccess from '../toastSuccess/ToastSuccess'
import ToastWarning from '../toastWarning/ToastWarning'
import ToastError from '../toastError/ToastError'
import ToastPermission from '../toastPermission/ToastPermission'

const ToastListError = ({
                            list = [],
                            closeAction,
                        }: {
    list: ToastProps[]
    closeAction?: (id?: number) => void
}) => {
    return (
        <>
            <div className="shared-toastListError">
                {list.map((toast) => {
                    switch (toast.type) {
                        case 'success':
                            return (
                                <ToastSuccess
                                    key={toast.id}
                                    {...toast}
                                    closeAction={() => closeAction && closeAction(toast.id)}
                                />
                            )
                        case 'warning':
                            return (
                                <ToastWarning
                                    key={toast.id}
                                    {...toast}
                                    closeAction={() => closeAction && closeAction(toast.id)}
                                />
                            )
                        case 'error':
                            return (
                                <ToastError
                                    key={toast.id}
                                    {...toast}
                                    closeAction={() => closeAction && closeAction(toast.id)}
                                />
                            )
                        case 'unauthorized':
                            return (
                                <ToastPermission
                                    key={toast.id}
                                    {...toast}
                                    closeAction={() => closeAction && closeAction(toast.id)}
                                />
                            )
                        default:
                            return
                    }
                })}
            </div>
        </>
    )
}

export default ToastListError
