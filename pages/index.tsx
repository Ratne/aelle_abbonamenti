import Head from 'next/head'
// import Component from "../components/login-btn";
// import {SessionProvider} from "next-auth/react";



export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>Homepage</div>
      {/*<SessionProvider>*/}
      {/*  <Component />*/}
      {/*</SessionProvider>*/}
    </div>
  )
}
