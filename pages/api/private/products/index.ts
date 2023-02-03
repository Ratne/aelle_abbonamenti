import clientPromise from "../../../../lib/mongodb";
import Product from "../../../../lib/models/Product";



export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
        case "POST":
            const db = new Product({
                 ...req.body,
             });

            db.save().then((response : any)  => {
                res.json({ status: 200, data: response });
            });
            break;
        case "GET":
            const allProducts = await Product.find({})
            res.json({ status: 200, data: allProducts });
            break;
    }


}
