import {useEffect, useState} from "react";
import BtnSecondary from "../../bootstrap/button/secondary/BtnSecondary";

const ModalCustomVH = ({
                           title,
                           titleLayout,
                           closeModal,
                           footerTemplate,
                           modalStyle,
                           children,
                           className
                       }: any) => {
    const [animation, setAnimation] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setAnimation("in show");
            document.body.style.overflow = "hidden";
        }, 100);
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            className={`sh modal modal-vh fade ${animation} ${className}`}
            tabIndex={-1}
            role="dialog"
            style={{display: "block", ...modalStyle}}>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {titleLayout ? (
                            titleLayout
                        ) : (
                            <h2 className="modal-title">{title}</h2>
                        )}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}></button>
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
    );
};

export default ModalCustomVH;
