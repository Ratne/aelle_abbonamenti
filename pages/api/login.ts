import clientPromise from "../../lib/mongodb";
import User from "../../lib/models/User";
import bcrypt from "bcrypt";
import {SignJWT} from "jose";


export default async function handler(req: any, res: any) {
    const client = await clientPromise;

    switch (req.method) {
         case "POST":
             console.log('entrato', req.body.password)
             const user = await User.findOne({
                 email: req.body.email
             });
             if (!user) {
                 res.json({ status: 400, data: 'Email o password errata' });
             }
             else {
                 const validPass = await bcrypt.compare(req.body.password, user.password);
                 if (!validPass) {
                     res.status(400).json({ status: 400, data: 'Email o password errata' });
                 }
                 else {
                     const token = await new SignJWT({_id: user._id, isAdmin: user.isAdmin})
                         .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
                         .setExpirationTime(Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7)
                         .setIssuedAt(Math.floor(Date.now() / 1000))
                         .setNotBefore(Math.floor(Date.now() / 1000))
                         .sign(new TextEncoder().encode(process.env.TOKEN_SECRET as string));
                     res.json({ status: 200, token });
                 }
             }
            break;
        default:  res.status(405).json({ status: 405, data: 'Metodo non supportato' });
    }
}
