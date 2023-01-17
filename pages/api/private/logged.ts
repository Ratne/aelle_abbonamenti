import {jwtVerify} from "jose";
import User from "../../../lib/models/User";

export default async function handler(req, res) {

     switch (req.method) {
        case "GET":
           const token = req.headers.token;

            jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET as string)).then((resp => {
                User.findOne({_id: resp.payload._id}, {password: 0}).then((user) => {
                    res.json({ status: 200, data: user });
                })


            })).catch((err) => {
                res.json({ status: 400 });
            })


           break;
    }
}
