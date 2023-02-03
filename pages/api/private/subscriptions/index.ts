import clientPromise from "../../../../lib/mongodb";
import Subscription from "../../../../lib/models/Subscription";
import Product from "../../../../lib/models/Product";



export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
        case "POST":
            const db = new Subscription({
                 ...req.body,
             });

            db.save().then((response : any)  => {
                res.json({ status: 200, data: response });
            });
            break;
        case "GET":
            const allSubscriptions = await Subscription.find({})
                .populate({path:'products', model: Product })
                .populate({path: 'recurringSubscription.products', model: Product});
            res.json({ status: 200, data: allSubscriptions });
            break;
    }


}
