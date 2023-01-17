export default function Infusionsoft() {
    return {
        id: "infusionsoft",
        name: "Infusionsoft",
        type: "oauth",
        version: "2.0",
        scope: "full",
        clientId: process.env.INFUSIONSOFT_ID,
        response_type: "code",
        clientSecret: process.env.INFUSIONSOFT_SECRET,
        authorization: {
            url: "https://accounts.infusionsoft.com/app/oauth/authorize",
            params: {
                scope: "full",
                response_type: "code",
                redirect_uri: process.env.INFUSIONSOFT_REDIRECT_URI,
            },
        },
        token: {
            url: "https://api.infusionsoft.com/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
                client_id: process.env.INFUSIONSOFT_ID,
                client_secret: process.env.INFUSIONSOFT_SECRET,
                grant_type: "authorization_code",
                redirect_uri: process.env.INFUSIONSOFT_REDIRECT_URI,
            }
        },
        userinfo: {
            request: () => {}
        },
        profile(profile: any) {
            return {
                email: 'profile',
                id: 'infusionsoft'
            }
        },
    }
}
