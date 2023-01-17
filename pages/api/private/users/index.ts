import clientPromise from "../../../../lib/mongodb";
import User from "../../../../lib/models/User";
import bcrypt from "bcrypt";
import {objDeleteProperties} from "../../../../shared/utils/objUtils";



export default async function handler(req, res) {
    await clientPromise();
    switch (req.method) {
         case "POST":
             //const verified = jwt.verify(req.header.token, process.env.TOKEN_SECRET);
             const salt = await bcrypt.genSalt(10);
             const hashPassword = await bcrypt.hash(req.body.password, salt);
             const db = new User({
                 ...req.body,
                 password: hashPassword,
                 isAdmin: false,
             });

            db.save().then(response => {
                res.json({ status: 200, data: objDeleteProperties(response, ['password']) });
            });
            break;
        case "GET":
            const allUser = await User.find({}, {password: 0});
            res.json({ status: 200, data: allUser });
            break;

        case "DELETE":
            res.json({ status: 200, data: "delete da fare" });

    }






    // switch (req.method) {
    //      case "GET":
    //         const allPosts = await db.collection("testcron").insertOne({
    //             date: new Date().toLocaleString()
    //
    //         });
    //         res.json({ status: 200, data: allPosts });
    //         break;
    // }
}
