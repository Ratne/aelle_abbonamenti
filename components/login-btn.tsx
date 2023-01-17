import { signIn } from "next-auth/react"
import React from "react";
interface ComponentPropsModel{
    userId?: string
}
const Component: React.FC<ComponentPropsModel> = ({userId}) => {

    return (
        <>
            {userId && <button onClick={() => signIn('infusionsoft', {
                    callbackUrl: `http://localhost:3000/pizzerie/63a1dc6b4db4c1207e10f863`,
                    redirect: false,
                    hello: 'asdas',
                },
                {
                    id: userId,
                    hello: 'asdass',
                    // allowSignup,
                })}>Sign in</button>}
        </>
    )
}

export default Component
