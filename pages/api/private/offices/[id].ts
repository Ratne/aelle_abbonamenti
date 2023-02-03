import clientPromise from "../../../../lib/mongodb";
import Office from "../../../../lib/models/Office";

export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {

        case "GET":
            const singleOffice = await Office.findOne({_id: req.query.id} );
            res.json({ status: 200, data: singleOffice });
            break;
        // case "PATCH":
        //     User.updateOne({ _id: req.query.id }, req.body).then(response => {
        //         res.json({ status: 200, data: response });
        //     })
        //     break;
        case "DELETE":
            Office.deleteOne({ _id: req.query.id }).then(response => {
                res.json({ status: 200, data: response });
            })
    }
}
