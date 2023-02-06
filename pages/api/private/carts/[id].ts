import clientPromise from "../../../../lib/mongodb";
import Cart from "../../../../lib/models/Cart";

export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {

        case "GET":
            const singleCart = await Cart.findOne({_id: req.query.id} );
            res.json({ status: 200, data: singleCart });
            break;
        // case "PATCH":
        //     User.updateOne({ _id: req.query.id }, req.body).then(response => {
        //         res.json({ status: 200, data: response });
        //     })
        //     break;
        case "DELETE":
            Cart.deleteOne({ _id: req.query.id }).then(response => {
                res.json({ status: 200, data: response });
            })
    }
}
