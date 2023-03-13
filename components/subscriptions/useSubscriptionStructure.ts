import {createStructureForm} from "../../shared/utils/forms/useStructureForm";
import {getArrayByNumber} from "../../shared/utils/arrayUtils";

export const useSubscriptionStructure = (products: any[] = [], dataForm: any, isEdit: boolean = false) => {

    const structureData = createStructureForm([
        {
            type: 'input',
            name: "name",
            label: "Nome Abbonamento",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'select',
            name: "products",
            label: "Seleziona i prodotti",
            dataElement: {
                type: 'text',
            },
            multiple: true,
            options: products.map(ele => ({
                label: ele.name, value: ele._id
            })),
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "price",
            label: "Prezzo Abbonamento",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'select',
            name: "billingEvery",
            label: "Preleva ogni",
            dataElement: {
                type: 'text',
            },
            options: [
                {value: "month", label: "Mese(i)"},
                {value: "week", label: "Settimana(e)"},
                {value: "day", label: "Giorno(i)"},
                {value: "year", label: "Anno(i)"}
            ],
            col: {xs: "12"},
        },
        ...(dataForm.billingEvery === 'month' ?
            [
                {
                    type: 'select',
                    name: "billingTime",
                    label: "Frequenza",
                    dataElement: {
                        type: 'text',
                    },
                    options: [
                        {value: "1", label: "1 mese"},
                        {value: "2", label: "2 mesi"},
                        {value: "3", label: "3 mesi"},
                        {value: "4", label: "4 mesi"},
                        {value: "6", label: "6 mesi"},
                    ],
                    col: {xs: "12"},
                }
            ] : [
                {
                    type: 'input',
                    name: "billingTime",
                    label: "Frequenza",
                    dataElement: {
                        type: 'text',
                    },
                    col: {xs: "12"},
                }
            ]),
        {
            type: 'input',
            name: "billingCycles",
            label: "Quanti pagamenti prelevare",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "firstPrice",
            label: "Prezzo aggiuntivo",
            dataElement: {
                type: 'text',
            },
            col: {xs: "12"},
        },
        ...(dataForm.billingEvery === 'month' && dataForm.billingTime ?
            [{
                recurringSubscription: getArrayByNumber(12 / parseInt(dataForm.billingTime)).map((ele, index) => {
                    return {
                        [index]: [{
                            products: {
                                type: 'select',
                                name: "products",
                                label: "Periodo " + (index + 1),
                                dataElement: {
                                    type: 'text',
                                },
                                multiple: true,
                                options: products.map(ele => ({
                                    label: ele.name, value: ele._id
                                })),
                                col: {xs: "12"},
                            }
                        }
                        ]
                    }
                })
            }] : [])

    ]);

    const validationData = {
        name: {
            required: {
                params: {
                    name: "name",
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
        billingEvery: {
            required: {
                params: {
                    name: "billingEvery",
                },
            },
        },
        billingTime: {
            required: {
                params: {
                    name: "billingTime",
                },
            },
        },
        billingCycles: {
            required: {
                params: {
                    name: "billingCycles",
                },
            },
        },
        firstPrice: {
            required: {
                params: {
                    name: "firstPrice",
                },
            },
        },
        /*  TODO MAX*/
        /*   ...(dataForm.billingEvery === 'month' && dataForm.billingTime ?
               [{
                   recurringSubscription: getArrayByNumber(12 / parseInt(dataForm.billingTime)).map((ele, index) => {
                       return {
                           [index]: {
                               products: {
                                   required: {
                                       params: {
                                           name: "firstPrice",
                                       },
                                   },
                               }
                           }
                       }
                   })
               }] : [])*/
    }

    return {
        structureData, validationData
    }
}
