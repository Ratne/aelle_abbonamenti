import React, {useEffect, useState} from "react";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useSubscriptionStructure} from "./useSubscriptionStructure";
import {createSubscription} from "../../services/subscriptions";
import {getProducts} from "../../services/products.service";

const CreateSubscription: React.FC = () => {

    const [products, setProducts] = useState();
    const submitHandler: UseFormSubmitModel = (event, data) => {
        createSubscription(data).then(res => {
            console.log(res)
        })
    };

    const {
        isSubmit,
        errors,
        submitAction,
        changeValue,
        dataForm,
        dataFormatted,
        setData
    } = useForm(submitHandler);
    const {structureData, validationData} = useSubscriptionStructure(products, dataForm);
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data)
        })
    }, [])


    return (

        <div className={"container mt-xl-5 mt-sm-0"}>

            <div><h2 className={"text-center"}>Crea nuovo abbonamento</h2></div>

            <form className={"mt-4"} onSubmit={submitAction}>

                {JSON.stringify(dataFormatted)}
                <FormElements
                    structure={structureData}
                    dataForm={dataForm}
                    errors={errors}
                    isSubmit={isSubmit}
                    changeValue={changeValue}
                />
<BtnPrimary className="w-100 justify-content-center mt-5" type="submit">Salva</BtnPrimary>
            </form>
        </div>
    );
}


export default CreateSubscription
