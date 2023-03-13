import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {createUser} from "../../services/users.service";
import {useUserStructure} from "../../components/users/useUserStructure";
import {useForm} from "../../shared/utils/forms/useForm";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import ModalCustom from "../../shared/bootstrap/modal/ModalCustom";
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import React, {useEffect} from "react";
import Card from "../../shared/ui/card/Card";
import {colorTheme} from "../../shared/colorUtils";

export default function CreateUser() {
    const submitHandler: UseFormSubmitModel = (event, data) => {
        createUser(data).then(res => {
            console.log(res)
        })
    };


    const {structureData, validationData} = useUserStructure();
    const {
        isSubmit,
        errors,
        submitAction,
        changeValue,
        dataForm,
        setData,
        setValidations
    } = useForm(submitHandler);
    
    useEffect(() => {
        setValidations(validationData)
    }, [dataForm])

    const closeCreateUser = () => {
        window.location.href = '/users'
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