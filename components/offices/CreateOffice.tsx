import React from "react";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useOfficeStructure} from "./useOfficeStructure";
import {createUser} from "../../services/users.service";
import {createOffice} from "../../services/offices.service";

const CreateOffice: React.FC = () => {


    const submitHandler: UseFormSubmitModel = (event, data) => {
        createOffice(data).then(res => {
            console.log(res)
        })
    };


    const {structureData, validationData} = useOfficeStructure();
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

            <div><h2 className={"text-center"}>Crea nuova sede</h2></div>

            <form className={"mt-4"} onSubmit={submitAction}>


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


export default CreateOffice
