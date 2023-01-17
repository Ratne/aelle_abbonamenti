export default {
    form: {
        action: {
            select: 'Seleziona'
        }
    },
    msg: {
        emptyData: {
            title: "Sorry, no report available.",
            subTitle: "There is currently no report.",
        }
    },
    errors: {
        be: {},
        fe: {
            required: 'The field {{name}} is required',
            requiredOne: 'Fill in the field or add {{name}}',
            piva: 'The field {{name}} is not right',

        },
        errorsMsg: {
            noPermission: 'You are not authorized for this operation',
            token: 'Token expired or incorrect',
            genericSave: 'Internal error, please try again later',
            pdfDownload: 'Error to generate pdf, please try later.'
        },
    },
    success: {
        success: {
            successMsg: {},
        },
    },
}
