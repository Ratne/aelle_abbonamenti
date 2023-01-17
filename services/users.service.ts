import http from "../shared/utils/http";
import {copyObject} from "../shared/utils/objUtils";

export const getUsers = () => {
   return http.get('/api/private/users')
    };

export const createUser = (data : any) => {
    return http.post('/api/private/users', data)
};

export const editPizzeria = (data : any) => {
    const copyData = copyObject(data);
    if (copyData.pizzeria?.tags) {
        copyData.pizzeria.tags = copyData.pizzeria.tags.split(',').map((ele : string) => +ele.trim());
    };
    if (copyData.pizzeria?.orderTags) {
        copyData.pizzeria.orderTags = copyData.pizzeria.orderTags.split(',').map((ele : string) => +ele.trim());
    }
    return http.patch(`/api/private/users/${copyData._id}`, copyData)
}

export const getSinglePizzeria = (id: string)    => {
    return http.get(`/api/private/users/${id}`)
}
