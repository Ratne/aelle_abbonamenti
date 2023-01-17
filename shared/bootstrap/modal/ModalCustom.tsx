import {useEffect, useState} from 'react'
import BtnSecondary from '../button/secondary/BtnSecondary'

const ModalCustom = ({
                         title,
                         closeModal,
                         footerTemplate,
                         children,
                         size = 'lg',
                     }: any) => {
    const [animation, setAnimation] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setAnimation('in show')
            document.body.style.overflow = "hidden";
        }, 100)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [])


    return (
        <div
            className={`sh modal fade ${animation}`}
            tabIndex={-1}
            role="dialog"
            style={{display: 'block'}}
        >
            <div className={`modal-dialog modal-${size}`} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">{children}</div>
                    </div>
                    <div className="modal-footer">
                        {footerTemplate ? (
                            footerTemplate
                        ) : (
                            <>
                                <BtnSecondary data-dismiss="modal" onClick={closeModal}>
                                    Chiudi
                                </BtnSecondary>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCustom
