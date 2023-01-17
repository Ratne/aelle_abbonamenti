
export const isObject = (obj: any): boolean =>
  typeof obj === "object" && obj !== null && obj.constructor === Object;

export const isFull = (obj: any = {}): boolean =>
    obj && isObject(obj) && !!Object.keys(obj).length;
export const isEmpty = (obj: any = {}): boolean => isFull(obj);
export const copyObject = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const objWithProperties = (obj: any, properties: string[] = []) => {
    return obj && properties.reduce((o: any, el:string) => {
        return {...o, [el]: obj[el]}
    }, {})
}

export const getObjectByArray = (arr: {name: string, value: any }[]) => {
    return arr?.reduce((obj: any, ele: any) => ({...obj, [ele.name]: ele.value}), {}) || {};
}

export const objDeleteProperties = (obj: any = {}, properties: any[] = []) => {
    const dataObj: any = copyObject(obj);
    properties.forEach(ele => {
        eval('delete dataObj.'+ele)
    })
    return dataObj
}
