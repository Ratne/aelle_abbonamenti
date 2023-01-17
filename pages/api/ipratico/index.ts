import axios from "axios";
import Order from "../../../lib/models/Order";

export default async function handler(req: any, res: any) {

    switch (req.method) {
        case "GET":
            axios.get('https://apicb.ipraticocloud.com/api/public/closed-payment-sessions?dateFrom=2023-01-10T10:33:54.487Z&dateTo=2023-01-11T10:33:54.487Z', {
                headers: {
                    "x-api-key": "12050:b3e683ef-c5c5-49f8-a678-44553826c2ca",
                }
            }).then(resp => {
                const data = resp.data[0];
                const order = new Order ({
                    name: data.id,
                    order: data.value.orderId,
                    paymentsTotal: data.value.paymentsTotal,
                    fidelity: data.value.businessActorId,
                    mixed: data,
                    userId: '63a5c30d0c32485406e90f67'
                })
                order.save().then((ord) => {
                    // infusionsoft
                    if (ord.fidelity.length) {

                        console.log("inserisco in infusionsoft l'utente")
                        // quando isDutch o isSplit è true bisogna cercare "closedOrderId" per capire quanti scontrini ci sono


                    }



                      res.json({ data: ord });
                }).catch((err) => {
                    // non salvato nel db
                    console.log(err)
                })
            }).catch(err => {
                // ipratico andato off
                console.log(err)
            })
    }
}

