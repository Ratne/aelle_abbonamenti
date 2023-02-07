import http from "../shared/utils/http";
import {copyObject} from "../shared/utils/objUtils";

export const getSubscriptions = () => {
   return http.get('/api/private/subscriptions')
    };

export const createSubscription = (data : any) => {
    return http.post('/api/private/subscriptions', data)
};

export const getSingleSubscription = (id: string)    => {
    return http.get(`/api/private/subscriptions/${id}`)
}
