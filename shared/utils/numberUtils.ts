import {notNull} from "./generalUtils";

export const clearNumberString = (string: any) => {
        return typeof string === 'string' ?
            string.replace(/\D+/g, '')
            :
            (typeof string === 'number'? string : undefined);
};

// export const getNumberByString = (val: string) =>{
//     const formatNumber = clearNumberString(val);
//     return notNull(formatNumber) ? parseFloat(formatNumber) : formatNumber;
// }

export const isNumber = (val: any) =>{
    return typeof val === 'number' || /^\d+$/.test(val);
}

