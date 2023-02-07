import {createStructureForm} from "../../shared/utils/forms/useStructureForm";

export const useSubscriptionStructure = (isEdit: boolean = false) => {

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
                multi: true
            }, options:[{value: "63dd2b55c1f8a9be39e1d3de", label: "Demo"}]
            ,
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
                    label: "Preleva ogni ",
                    dataElement: {
                        type: 'text',
                    },options:[
                        {value: "month", label: "Mese(i)"},
                        {value: "week", label: "Settimana(e)"},
                        {value: "day", label: "Giorno(i)"},
                        {value: "year", label: "Anno(i)"}
                    ],
                    col: {xs: "12"},
                },
                {
                    type: 'input',
                    name: "billingTime",
                    label: "Preleva Ogni",
                    dataElement: {
                        type: 'number',
                    },
                    col: {xs: "12"},
                },
        {
                    type: 'input',
                    name: "billingCycles",
                    label: "Quanti pagamenti prelevare",
                    dataElement: {
                        type: 'number',
                    },
                    col: {xs: "12"},
                },
        {
                    type: 'input',
                    name: "firstPrice",
                    label: "Prezzo aggiuntivo",
                    dataElement: {
                        type: 'string',
                    },
                    col: {xs: "12"},
                },
        {
            type: 'input',
            name: "recurringSubscription",
            label: "Calcolo prodotti",
            dataElement: {
                type: 'string',
            },
            col: {xs: "12"},
        },

,


    ]);

    const validationData = {
    }

    return {
        structureData, validationData
    }
}
