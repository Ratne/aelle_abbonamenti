import {createStructureForm} from "../../shared/utils/forms/useStructureForm";

export const useProductStructure = (isEdit: boolean = false) => {

    const structureData = createStructureForm([
        ...(isEdit ? [] : [{
            type: 'input',
            name: "name",
            label: "Nome Prodotto",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
            {
                type: 'input',
                name: "description",
                label: "Nome Descrizione del prodotto",
                dataElement: {
                    type: 'text',
                },
                col: {xs: "12"},
            },
            {
                type: 'input',
                name: "sku",
                label: "Sku del prodotto",
                dataElement: {
                    type: 'text',
                },
                col: {xs: "12"},
            },
            {
                type: 'input',
                name: "idInfusionsoft",
                label: "id infusionsoft del prodotto",
                dataElement: {
                    type: 'text',
                },
                col: {xs: "12"},
            },
            {
                type: 'input',
                name: "price",
                label: "Prezzo del prodotto",
                dataElement: {
                    type: 'text',
                },
                col: {xs: "12"},
            },
            {
                type: 'radio',
                name: "shippable",
                label: "É spedibile?",
                options: [{
                    label: "si",
                    value: true,
                },
                    {
                        label: "no",
                        value: false
                    }],
                col: {xs: "12"},
            }
        ]),


    ]);

    const validationData = {
        ...(isEdit ? {} :
                {
                    name: {
                        required: {
                            params: {
                                name: "name",
                            },
                        },
                    },
                    idInfusionsoft: {
                        required: {
                            params: {
                                name: "idInfusionsoft",
                            },
                        },
                    },
                    price: {
                        required: {
                            params: {
                                name: "price",
                            },
                        },
                    },
                    shippable: {
                        required: {
                            params: {
                                name: "shippable",
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
