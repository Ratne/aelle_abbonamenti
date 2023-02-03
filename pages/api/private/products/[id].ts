import clientPromise from "../../../../lib/mongodb";
import Product from "../../../../lib/models/Product";

export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {

        case "GET":
            const singleProduct = await Product.findOne({_id: req.query.id} );
            res.json({ status: 200, data: singleProduct });
            break;
        // case "PATCH":
        //     User.updateOne({ _id: req.query.id }, req.body).then(response => {
        //         res.json({ status: 200, data: response });
        //     })
        //     break;
        case "DELETE":
            Product.deleteOne({ _id: req.query.id }).then(response => {
                res.json({ status: 200, data: response });
            })
    }
}
