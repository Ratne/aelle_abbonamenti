import NextAuth from "next-auth"
import infusionsoft from "../../../src/providers/infusionsoftV2";
import axios from "axios";
import User from "../../../lib/models/User";

const externalData = {};

export default async function auth(req, res) {
    if(req.query.id){
        externalData.id = req.query.id
    }
    if (req.query.nextauth.includes("signin") && req.query.code && req.method === "GET") {
        console.log(externalData.id, 'id')

        const user = await User.findById(externalData.id)
        console.log(user, 'user')
        if (user) {

            const data = {
                code: req.query.code,
                redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/signin",
                client_id: process.env.INFUSIONSOFT_ID,
                client_secret: process.env.INFUSIONSOFT_SECRET,
                grant_type: "authorization_code"
            }
            const response = await axios.post("https://api.infusionsoft.com/token", data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            const pizzeria = {
                ...user.pizzeria,
                infusionsoftToken: response.data.access_token,
                infusionsoftRefreshToken: response.data.refresh_token
            }
            const result = await User.updateOne({ _id: externalData.id }, {pizzeria})
            console.log(result)
            return res.redirect('/pizzerie/'+externalData.id)
            // infusionsoftToken: {type: String},
            // infusionsoftRefreshToken: {type: String},

        } else {
            console.log("user not found");
            return res.redirect('/login')
        }

        // const scope = response.data.scope.split("|");
        // const infusionsoftUrl= scope[1]
        // const docs = await User.find({ "pizzeria.infusionsoftUrl": infusionsoftUrl })
        // if (docs.length > 0) {
        //     const pizzeria = {
        //         ...docs[0].toObject().pizzeria,
        //         infusionsoftToken: response.data.access_token,
        //         infusionsoftRefreshToken: response.data.refresh_token
        //     }
        //
        //     const result = await User.updateOne({ _id: docs[0]._id }, {pizzeria})
        //     console.log(result)
        //     return res.redirect('/pizzerie/'+docs[0]._id)
        //     // infusionsoftToken: {type: String},
        //     // infusionsoftRefreshToken: {type: String},
        //
        // } else {
        //     console.log("user not found");
        //     return res.redirect('/login')
        // }


    }

    return await NextAuth(req, res, {
        providers: [
            infusionsoft()
        ],
        // pages: {
        //     signIn: '/pizzerie',
        // },
        callbacks: {
            async signIn({ user, account, profile, email, credentials }) {
                console.log(user, user, account, profile, email, credentials, 'signin')
                return true
            },
            async redirect(data) {
                console.log(data, 'redirect')
                return data.url
            },
            async session({ session, user, token}) {
                console.log(session, user, token, 'session')
                return session
            },
            async jwt({ token, user, account, profile, isNewUser }) {
                console.log(token, user, account, profile, isNewUser, 'jwt')
                return token
            }
        },
    })
}
