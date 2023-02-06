import http from "../shared/utils/http";
import {copyObject} from "../shared/utils/objUtils";

export const getCarts = () => {
   return http.get('/api/private/carts')
    };

export const createCart = (data : any) => {
    return http.post('/api/private/carts', data)
};

// export const editPizzeria = (data : any) => {
//     const copyData = copyObject(data);
//     if (copyData.pizzeria?.tags) {
//         copyData.pizzeria.tags = copyData.pizzeria.tags.split(',').map((ele : string) => +ele.trim());
//     };
//     if (copyData.pizzeria?.orderTags) {
//         copyData.pizzeria.orderTags = copyData.pizzeria.orderTags.split(',').map((ele : string) => +ele.trim());
//     }
//     return http.patch(`/api/private/users/${copyData._id}`, copyData)
// }

export const getSingleCart = (id: string)    => {
    return http.get(`/api/private/carts/${id}`)
}
