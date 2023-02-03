import http from "../shared/utils/http";
import {copyObject} from "../shared/utils/objUtils";

export const getProducts = () => {
   return http.get('/api/private/products')
    };

export const createProduct = (data : any) => {
    return http.post('/api/private/products', data)
};

export const getSingleOffice = (id: string)    => {
    return http.get(`/api/private/products/${id}`)
}
