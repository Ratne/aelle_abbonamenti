import React, {useCallback, useEffect, useState} from "react";
import {copyObject, isObject} from "../objUtils";
import {ValueName} from "./models/DataForm";
import {
    LastChangeModel,
    useFormDataInitModel,
    UseFormOthersModel,
    useFormRoleValidationsModel,
    UseFormSubmitModel,
} from "./models/UseFormModel";
import {createValidationsForm, getNameField, getObjForm, setObjForm} from "./useStructureForm";
import {checkValidation} from "./utils/checkValidations";
import {deleteElementByArrayModel} from "./models/FormElementModel";

export function useForm(
    submitCallback: UseFormSubmitModel,
    validationRole: any[] | useFormRoleValidationsModel = {},
    dataInit: useFormDataInitModel = {},
    other?: UseFormOthersModel
) {
    const [dataForm, setDataForm] = useState(setObjForm(dataInit));
    // const [dataFormatted, setDataFormatted] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: any }>({});
    const [valid, setValid] = useState(false);
    const [lastChange, setLastChange] = useState<LastChangeModel>({});
    const resetForm = (init: { [key: string]: any } = {}) => {
        setErrors({});
        setValid(false);
        setIsSubmit(false);
        setDataForm(init);
    };
    const dataFormatted = useCallback(() => {
        return getObjForm(dataForm);
    }, [dataForm]);
    const getValidationsData = (validationsData: any[] | useFormRoleValidationsModel = {}) => {
        return isObject(validationsData) ? validationsData : createValidationsForm(validationsData as any[], dataFormatted())
    }
    const [validations, setValidationsState] = useState<useFormRoleValidationsModel>(getValidationsData(validationRole));


    const setValidations = (validationsData: any[] | useFormRoleValidationsModel = {}) => {
        setValidationsState(getValidationsData(validationsData))
    }
    const setData = (data: { [key: string]: any } = {}) => {
        setLastChange({
            newValue: data,
            newValueRaw: setObjForm(data),
        });
        let objForm = setObjForm(data);
        setDataForm(objForm);
    };
    const getDataFormatted = () => {
        return getObjForm(dataForm);
    };

    const deleteElementByArray: deleteElementByArrayModel = (path, index) => {
        const copyData = copyObject(dataFormatted());
        eval("copyData" + path + ".splice(" + index + ", 1)");
        setData(copyData);
    };
    const getNameFieldForm = (data: string) => {
        return getNameField(data);
    };
    const submitAction = (event?: React.FormEvent<HTMLFormElement> | any) => {
        event && event.preventDefault && event.preventDefault();
        setIsSubmit(true);
        if (issetErrors(dataForm))
            submitCallback(event, getDataFormatted(), dataForm);
    };

    const issetErrors = (data: { [key: string]: any }) => {
        let valid = !Object.keys(getErrors(data)).length;
        setValid(valid);
        return valid;
    };

    const getErrors = (data: any) => {
        let errors: {
            [key: string]: { code: string; params: { [key: string]: string } };
        } = Object.keys(validations).reduce((obj: any, validation) => {
            const value = data[validation];
            Object.keys(validations[validation]).forEach((role) => {
                if (
                    !checkValidation(
                        role,
                        value,
                        data,
                        validations[validation][role].moreData
                    ) &&
                    !obj[validation]
                ) {
                    obj[validation] = {
                        code: "fe." + role,
                        params: validations[validation][role].params,
                    };
                }
            });
            return obj;
        }, {});
        setErrors(errors);
        return errors;
    };

    const changeValue = ({value, name}: ValueName) => {
        let copyObj = {...dataForm};
        if (isObject(value)) {
            setLastChange({...lastChange, newValue: value});
            copyObj = {...copyObj, ...value};
        } else {
            setLastChange({...lastChange, newValue: {[name]: value}});
            copyObj[name] = value;
        }
        getErrors(copyObj);
        setDataForm(copyObj);
    };
    useEffect(() => {
        other &&
        other.changeValueEnd &&
        other.changeValueEnd(getObjForm(dataForm), {
            ...lastChange,
            ...(lastChange.newValue
                ? {newValue: getObjForm(lastChange.newValue)}
                : {}),
        });
    }, [dataForm]);
    const isValid = () => {
        return issetErrors(dataForm);
    };
    // useEffect(() => {
    //   setDataFormatted(getObjForm(dataForm))
    // }, [dataForm])

    return {
        dataFormatted: dataFormatted(),
        deleteElementByArray,
        getNameFieldForm,
        isSubmit,
        dataForm,
        errors,
        valid,
        setValidations,
        isValid,
        setData,
        getDataFormatted,
        resetForm,
        submitAction,
        changeValue,
    };
}
