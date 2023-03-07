import axios from "axios";
import httpData from "../shared/utils/httpData";
import {store} from "../store/store";
import {logoutAction} from "../store/authSlice";


const status401Interceptor =  async (err: any) => {

    if(err.response && err.response.status === 401){
        console.log('processo di logout');
        const originalRequest = err.config;
        if (err.response.status === 401) {
            store.dispatch(logoutAction())

        }
        return Promise.reject(err);


    }
    return Promise.reject(err);
}

export default status401Interceptor;
