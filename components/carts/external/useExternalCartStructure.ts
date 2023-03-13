import {createStructureForm} from "../../../shared/utils/forms/useStructureForm";

export const useExternalCartStructure = (isEdit: boolean = false, dataForm: any, product: any, isPrivate: boolean = false) => {
    const commonStructure = [
        {
            type: 'input',
            name: "name",
            label: "Name",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "surname",
            label: "Surname",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "email",
            label: "Email",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "phone",
            label: "Phone",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        }]
    const addressStructure = [
        {
            type: 'input',
            name: "address",
            label: "Address",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "number",
            label: "Number",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "City",
            label: "City",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "province",
            label: "Province",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "zip",
            label: "Zip code",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "country",
            label: "Country",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        }
    ]

    const structureData = createStructureForm([
        ...(isEdit ? [] : [
            ...(isPrivate ? [
                    ...commonStructure,
                    ...(product.shippable ? [...addressStructure] : [])
                ] :
                [
                    ...commonStructure,
                    ...addressStructure,
                    {
                        type: 'input',
                        name: "businessName",
                        label: "businessName",
                        dataElement: {
                            type: 'text',
                        },
                        col: {xs: "12"},
                    },
                    {
                        type: 'input',
                        name: "vatNumber",
                        label: "VAT number",
                        dataElement: {
                            type: 'text',
                        },
                        col: {xs: "12"},
                    },
                    {
                        type: 'input',
                        name: "vatNumber",
                        label: "VAT number",
                        dataElement: {
                            type: 'text',
                        },
                        col: {xs: "12"},
                    },
                    dataForm.country === 'italy' && {
                        type: 'input',
                        name: "uniqueCode",
                        label: "Unique code",
                        dataElement: {
                            type: 'text',
                        },
                        col: {xs: "12"},
                    },
                ]),

        ])
    ]);

    const validationData = {
        ...(isEdit ? {} :
                {
                    email: {
                        required: {
                            params: {
                                name: "email",
                            },
                        },
                    },
                    name: {
                        required: {
                            params: {
                                name: "name",
                            },
                        },
                    },
                }
        ),
    }

    return {
        structureData, validationData
    }
}
