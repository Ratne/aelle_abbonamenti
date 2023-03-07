import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import React from "react";
import Card from "../../shared/ui/card/Card";
import {createProduct} from "../../services/products.service";
import {useProductStructure} from "../../components/products/useProductStructure";

export default function CreateProduct() {
    const submitHandler: UseFormSubmitModel = (event, data) => {
        createProduct(data).then(res => {
            console.log(res)
        })
    };


    const {structureData, validationData} = useProductStructure();
    const {
        isSubmit,
        errors,
        submitAction,
        changeValue,
        dataForm,
        setData
    } = useForm(submitHandler);


    const closeCreateUser = () => {
        window.location.href = '/products'
    }

    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row border-bottom pb-4">
                    <div className="col-auto ms-auto d-flex gap-2">
                        <BtnSecondary onClick={closeCreateUser}>Dismiss</BtnSecondary>
                        <BtnPrimary onClick={submitAction}>Create</BtnPrimary>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 col-lg-9 col-xl-8 col-xxl-7">
                        <h2 className={'text-primary border-bottom border-gray-light pb-2'}>Create a Customer</h2>
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