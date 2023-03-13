import clientPromise from "../../../lib/mongodb";
import Cart from "../../../lib/models/Cart";
import Product from "../../../lib/models/Product";
import Subscription from "../../../lib/models/Subscription";

export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
        case "GET":
            const singleCart = await Cart.findOne({url: req.query.url} )
            .populate({path:'products', model: Product })
            .populate({path:'subscription', model: Subscription })
            res.json({ status: 200, data: singleCart });
            break;
    }
}
