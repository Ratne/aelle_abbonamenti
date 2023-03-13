import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import React, {useEffect, useState} from "react";
import Card from "../../shared/ui/card/Card";
import {getProducts} from "../../services/products.service";
import {useSubscriptionStructure} from "../../components/subscriptions/useSubscriptionStructure";
import {createSubscription} from "../../services/subscriptions";

export default function CreateSubscription() {
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
        dataFormatted,
        dataForm,
        setData,
        setValidations
    } = useForm(submitHandler);

    const {structureData, validationData} = useSubscriptionStructure(products, dataForm);

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data)
        })
    }, [])

    useEffect(() => {
        setValidations(validationData)
    }, [dataForm])

    const closeCreateSub = () => {
        window.location.href = '/subscriptions'
    }

    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row border-bottom pb-4">
                    <div className="col-auto ms-auto d-flex gap-2">
                        <BtnSecondary onClick={closeCreateSub}>Dismiss</BtnSecondary>
                        <BtnPrimary onClick={submitAction}>Create</BtnPrimary>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 col-lg-9 col-xl-8 col-xxl-7">
                        <h2 className={'text-primary border-bottom border-gray-light pb-2'}>Create a Subscription</h2>
                        <form className={"mt-4"} onSubmit={submitAction}>
                            <FormElements
                                structure={structureData}
                                dataForm={dataForm}
                                errors={errors}
                                isSubmit={isSubmit}
                                changeValue={changeValue}
                            />
                        </form>
                    </div>
                </div>
            </Card>


        </div>
    )
}