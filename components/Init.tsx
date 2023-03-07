import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import httpData from "../shared/utils/httpData";
import authInterceptor from "../interceptor/authInterceptor";
import axios from "axios";
import http from "../shared/utils/http";
import status401Interceptor from "../interceptor/status401Interceptor";
import {Provider, useSelector} from "react-redux";
import {selectIsLogged, selectUser, setIsLogged, setUser} from "../store/authSlice";
import {useAppDispatch} from "../store/hooks";
import {useRouter} from "next/router";
import LoaderFullScreen from "../shared/ui/loader/loaderFullscreen/LoaderFullScreen";
import {selectActiveLoad} from "../store/loadSlice";
import SidebarMenu from "./sidebarMenu/SidebarMenu";
axios.interceptors.request.use(authInterceptor)
axios.interceptors.response.use((config) => config, status401Interceptor)


export default function Init({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const user = useSelector(selectUser);
  const isLogged = useSelector(selectIsLogged);
  const showLoader = useSelector(selectActiveLoad)
  const dispatch = useAppDispatch();
  useEffect(() => {
    httpData.url = process.env.NEXT_PUBLIC_REACT_APP_URL || '';
    http.get('/api/private/logged').then(res => {
      dispatch(setUser(res.data))
      dispatch(setIsLogged(true))
    }, err => {
      console.log(err)
    })
  },[])
  useEffect(() => {
    if(isLogged === false){
      router.push('/login')
    } else if((router.pathname === '/login' && isLogged === true) || (isLogged === true && router.pathname !== '/' && !user?.isAdmin)){
      router.push('/')
    }
  }, [isLogged])
  return <>
    {isLogged === undefined ? <div>Caricamento in corso....</div> :
        <>
          <LoaderFullScreen show={showLoader}/>
          <main>
            {isLogged && user && <SidebarMenu user={user}/>}
              <div className={'container-fluid p-4 mb-4'}>
                <div className="row">
                  <div className="col-12">
                    <Component user={user} {...pageProps} />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </main>
          {/*<Footer/>*/}
        </>
    }
  </>
}
