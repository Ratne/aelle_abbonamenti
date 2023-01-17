export default {
    form: {
        action: {
            select: 'Seleziona'
        }
    },
    msg: {
        emptyData: {
            title: "Ci dipiace, nessun report disponibile.",
            subTitle: "Al momento non è presente nessun report.",
        }
    },
    errors: {
        be: {},
        fe: {
            required: 'Il campo {{name}} è obbligatorio',
            email: 'Il campo {{name}} non è valido',
            requiredOne: 'Compilare il campo o aggiungere {{name}}',
            piva: 'Il campo {{name}} non è corretto',
        },
        errorsMsg: {
            noPermission: 'Non sei autorizzato per questa operazione',
            token: 'Token scaduto o errato',
            genericSave: 'Errore interno, riprova più tardi',
            pdfDownload: 'Errore nel generare il pdf, riprova più tardi.'
        },
    },
    success: {
        successMsg: {},
    },
}
