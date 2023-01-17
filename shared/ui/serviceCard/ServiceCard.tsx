import React from 'react';
import Image from "next/image"
import {ServiceModel} from "./ServiceModel";
import IconButton from "../icon/IconBtn";

const ServiceCard = ({
                         image,
                         service,
                         disabled,
                         clickHandler,
                         infoCLickHandler
                     }: {
    image: string,
    service: ServiceModel,
    disabled?: boolean,
    clickHandler?: (name: string) => void,
    infoCLickHandler?: (serviceName: string) => void
}) => {
    const imageSrc = image ? require(`/public/services/${image}.svg`) : ''

    return (
        <div className={`service-card ${disabled ? "inactive" : "pointer"}`}
             onClick={() => clickHandler && clickHandler(service.idDocument)}>
            <div className={"service-img"}>
                {disabled && <div className={"info"}><IconButton icon={"info"} variant={"secondary"}
                                                                 clickHandler={() => infoCLickHandler && infoCLickHandler(service.idDocument)}/>
                </div>}
                <Image src={imageSrc} width={"210px"} height={"210px"} className={"s-img"}/>
            </div>
            <div className={"service-title"}>{service.title}</div>
        </div>
    );
};

export default ServiceCard;
