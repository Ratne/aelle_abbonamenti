export const useLoginStructure = () => {

    const structureLoginData = [
        {
            type: 'input',
            name: "email",
            label: "Email",
            dataElement: {
                placeholder: "Inserisci la mail",
                type: 'text',
            },
            col: {xs: "12"},
        },
        {
            type: 'input',
            name: "password",
            label: "Password",
            dataElement: {
                placeholder: "Inserisci la password",
                type: 'password',
            },
            col: {xs: "12"},
        }
    ]

    const validationLoginData = {
        email: {
            required: {
                params: {
                    name: "Email",
                },
            },
            email: {
                params: {
                    name: "Email",
                },
            },
        },
        password: {
            required: {
                params: {
                    name: "Password",
                },
            },
        }
    }

    return {
        structureLoginData, validationLoginData
    }
}