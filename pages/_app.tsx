import '../styles/index.scss'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import httpData from "../shared/utils/httpData";
import authInterceptor from "../interceptor/authInterceptor";
import axios from "axios";
import http from "../shared/utils/http";

import { Provider } from 'react-redux';
import {store} from "../store/store";
import {decrementN, incrementN} from "../store/loadSlice";
import Init from "../components/Init";
import status401Interceptor from "../interceptor/status401Interceptor";
axios.interceptors.request.use(authInterceptor)

axios.interceptors.response.use((config) => config, status401Interceptor)
axios.interceptors.request.use((config) => {
  store.dispatch(incrementN());
  return config;
});
axios.interceptors.response.use(
    (config: any) => {
      store.dispatch(decrementN());
      return config;
    },
    (err) => {
      store.dispatch(decrementN());
      return Promise.reject(err);
    }
);
export default function App(props: AppProps) {
  return <Provider store={store}>
      <Init {...props} />
  </Provider>
}
