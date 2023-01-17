import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import httpData from "../shared/utils/httpData";
import authInterceptor from "../interceptor/authInterceptor";
import axios from "axios";
import http from "../shared/utils/http";
axios.interceptors.request.use(authInterceptor)


export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  useEffect(() => {
    httpData.url = process.env.NEXT_PUBLIC_REACT_APP_URL || '';
    http.get('/api/private/logged').then(res => {
        setUser(res.data)
    })
  },[])
  return <Component user={user} {...pageProps} />
}
