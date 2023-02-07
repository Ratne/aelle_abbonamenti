import clientPromise from "../../../../lib/mongodb";
import Cart from "../../../../lib/models/Cart";
import Product from "../../../../lib/models/Product";
import Subscription from "../../../../lib/models/Subscription";



export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
        case "POST":
            // url univoco per evitare doppioni
            const db = new Cart({
                 ...req.body,
             });

            db.save().then((response : any)  => {
                res.json({ status: 200, data: response });
            });
            break;
        case "GET":
            const allCart = await Cart.find({})
            res.json({ status: 200, data: allCart });
            break;
    }


}
