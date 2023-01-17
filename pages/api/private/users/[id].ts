import clientPromise from "../../../../lib/mongodb";
import User from "../../../../lib/models/User";

export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {

        case "GET":
            const singleUser = await User.findOne({_id: req.query.id}, {password: 0});
            res.json({ status: 200, data: singleUser });
            break;
        case "PATCH":
            User.updateOne({ _id: req.query.id }, req.body).then(response => {
                res.json({ status: 200, data: response });
            })
            break;
        case "DELETE":
            User.deleteOne({ _id: req.query.id }).then(response => {
                res.json({ status: 200, data: response });
            })
    }
}
