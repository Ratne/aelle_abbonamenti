This is a [Next.js](https://nextjs.org/) starter project for Keap and Oauth2 with nextauth
## Getting Started

First run
```bash
npm run i
```

Then create a .env.local file with the following variables, take infusionsoft_id and secret from developer account
on keap developer portal

```bash
INFUSIONSOFT_ID=XXXXXX
INFUSIONSOFT_SECRET=YYYYYY
INFUSIONSOFT_REDIRECT_URI=http://localhost:3000/api/auth/signin
```

Open [http://localhost:3000](http://localhost:3000) with your browser
and click on Sign in button
After just click on Sign in with Infusionsoft and login with your infusionsoft account

At end you will get the token and refresh token in your console, store them in a safe place and use them for refresh the token each 24H
