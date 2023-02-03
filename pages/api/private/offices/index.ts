import clientPromise from "../../../../lib/mongodb";
import Office from "../../../../lib/models/Office";



export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
        case "POST":
            const db = new Office({
                 ...req.body,
             });

            db.save().then((response : any)  => {
                res.json({ status: 200, data: response });
            });
            break;
        case "GET":
            const allOffice = await Office.find({});
            res.json({ status: 200, data: allOffice });
            break;
    }


}
