import React from "react";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useProductStructure} from "./useProductStructure";
import {createProduct} from "../../services/products.service";

const CreateProduct: React.FC = () => {


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

    return (

        <div className={"login-container mt-xl-5 mt-sm-0"}>

            <div><h2 className={"text-center"}>Crea nuovo prodotto</h2></div>

            <form className={"mt-4"} onSubmit={submitAction}>

                {JSON.stringify(dataForm)}
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


export default CreateProduct
