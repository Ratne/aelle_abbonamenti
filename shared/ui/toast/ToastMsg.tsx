import React from 'react'
import {mergeClass} from '../../functions/function'
import ToastPropsStyle from './models/ToastProps'

interface ToastProps {
    className?: string
    toastStyle: ToastPropsStyle
    title: string
    body?: string
    showToast?: boolean
    closeAction: () => void
}

const ToastMsg = ({
                      className,
                      toastStyle,
                      title,
                      body,
                      showToast = true,
                      closeAction,
                  }: ToastProps) => {
    return (
        <div className={mergeClass('shared-toast', className)}>
            <div
                className="toast show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div
                    className="toast-header"
                    style={{
                        backgroundColor: toastStyle.style.bgColor,
                        color: toastStyle.style.color,
                    }}
                >
                    <span className="me-auto">{title}</span>
                    <button
                        type="button"
                        className="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={closeAction}
                    >
                    </button>
                </div>
                {body && <div className="toast-body">{body}</div>}
            </div>
        </div>
    )
}

export default ToastMsg
