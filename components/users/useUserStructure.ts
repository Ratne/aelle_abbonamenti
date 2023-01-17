import {createStructureForm} from "../../shared/utils/forms/useStructureForm";

export const useUserStructure = (isEdit: boolean = false) => {

    const structureData = createStructureForm([
            ...(isEdit? [] : [{
            type: 'input',
            name: "email",
            label: "Email Utente",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "password",
            label: "Password accesso Utente",
            dataElement: {
                type: 'password',
            },
            col: {xs: "12"},
        }]),


    ]);

    const validationData = {
    }

    return {
        structureData, validationData
    }
}
