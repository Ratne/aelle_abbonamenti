import {createStructureForm} from "../../shared/utils/forms/useStructureForm";

export const useOfficeStructure = (isEdit: boolean = false) => {

    const structureData = createStructureForm([
            ...(isEdit? [] : [{
            type: 'input',
            name: "email",
            label: "Email Sede",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "name",
            label: "Nome della sede",
            dataElement: {
                type: 'text',
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
