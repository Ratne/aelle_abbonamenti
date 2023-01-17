import {isObject} from "../objUtils";
import {isArray} from "../arrayUtils";
import {notNull} from "../generalUtils";

const divisor = "___";

const getDataByArray = (data: any, ele: string, pre: string) => {
    return data[ele].type && data[ele].name
        ? [{...data[ele], name: getPreString(pre) + ele}]
        : data[ele].reduce((arrInt: any[], el: any) => {
            return el.type && el.name
                ? [
                    ...arrInt,
                    {...el, name: getPreString(pre) + ele + divisor + el.name},
                ]
                : [...arrInt, ...getData(el, getPreString(pre) + ele)];
        }, []);
};

export const getPropertyArray = (pre: string, name: string) => {
    return (
        (pre
            ? pre
                .split(divisor)
                .map((el) => "['" + el + "']")
                .join("")
            : pre) +
        "['" +
        name +
        "']"
    );
};

export const getDataFormArrayName = (data: any, pre: string, formData: any) => {
    try {
        return eval("formData" + getPropertyArray(pre, data.name));
    } catch (err) {
        return [];
    }
};

export const getDataFormArray = (data: any, pre: string, formData: any) => {
    //const formData = getObjForm(dataForm);
    const array = getDataFormArrayName(data, pre, formData) || [];

    return array.map((ele: any, index: number) => ({
        name: getPreString(pre) + data.name,
        index: index,
        value: ele,
        elements: getDataByArray(
            {[index.toString()]: data.form},
            index.toString(),
            getPreString(pre) + data.name
        ),
    }));
    // return array.reduce((arr: any, ele: any, index: number) => {
    //   return [
    //     ...arr,
    //     ...getDataByArray(
    //       { [index.toString()]: data.form },
    //       index.toString(),
    //       getPreString(pre) + data.name
    //     ),
    //   ];
    // }, []);
};
// getDataFormArray(data, pre, dataForm)
const getData = (data: any, pre: string = ""): any[] => {
    return data.form
        ? [{...data, pre}]
        : Object.keys(data).reduce((arr: any[], ele: string) => {
            arr = [...arr, ...getDataByArray(data, ele, pre)];
            return arr;
        }, []);
};

export const getPreString = (pre: string = "") => {
    return pre ? pre + divisor : "";
};

export const splitArrayByDivisor = (array: string[] = []) => {
    return array.filter((el) => notNull(el)).join(divisor);
};

export const createStructureForm: (
    data?: any[],
    dataForm?: any
) => any[] = (data = [], dataForm = {}) => {
    return data.reduce((arr, ele) => {
        if (ele.type && ele.name) arr = [...arr, ele];
        else arr = [...arr, ...getData(ele, "")];
        return arr;
    }, []);
};

const validationListToObj = (validations: any[]) => {
    return validations.reduce((objVal: any, singleVal: any) => {
        objVal[singleVal.name] = singleVal;
        return objVal;
    }, {});
};

export const createValidationsForm = (
    validations: any[] = [],
    dataFormatted: any = {}
): { [key: string]: any } => {

    return validations.reduce((obj, validation) => {
        return {...obj, ...getObjectValidation(validation, dataFormatted)};
    }, {});
};
export const getNameField = (data: string) => {
    return data.replace(/\./g, divisor);
};
export const getDataFormValidationName = (data: any, pre: string) => {
    try {
        return eval("data" + pre.split(divisor)
            .map((el: string) => "['" + el + "']")
            .join("")) || [];
    } catch (err) {
        return [];
    }
};
export const getDataLengthFormValidation = (dataFormatted: any, property: any) => {
    return getDataFormValidationName(dataFormatted, property).length;

}

export const getObjectValidation = (
    validation: any,
    dataFormatted: any,
    baseString: string = ""
) => {
    let obj: { [key: string]: any } = {};
    if (validation.name && validation.validations) {
        obj[(baseString ? baseString + divisor : "") + validation.name] =
            validationListToObj(validation.validations);
    } else if (validation.form) {
        validation.form.forEach((v: any) => {
            obj = {...obj, ...getObjectValidation(v, dataFormatted, baseString + divisor + [0])};
        })
    } else if (isArray(validation)) {
        validation.forEach((v: any) => {
            obj = {...obj, ...getObjectValidation(v, dataFormatted, baseString)};
        });
    } else {
        Object.keys(validation).forEach((singleInt) => {
            if (validation[singleInt].form) {
                const index = getDataLengthFormValidation(dataFormatted, (baseString ? baseString + divisor : "") + singleInt);
                for (let i = 0; i < index; i++) {
                    if (validation[singleInt].form.validations) {
                        obj = {
                            ...obj, ...getObjectValidation({
                                ...validation[singleInt].form,
                                name: i.toString()
                            }, dataFormatted, (baseString ? baseString + divisor : "") + singleInt)
                        };
                    } else {
                        validation[singleInt].form.forEach((v: any) => {
                            obj = {...obj, ...getObjectValidation(v, dataFormatted, (baseString ? baseString + divisor : "") + singleInt + divisor + [i])};
                        })
                    }

                }

            } else {
                validation[singleInt].forEach((val: any) => {
                    if (val.name) {
                        obj[(baseString ? baseString + divisor : "") + singleInt + divisor + val.name] =
                            validationListToObj(val.validations);
                    } else {
                        Object.keys(val).forEach((singleVal: any) => {
                            obj = {
                                ...obj,
                                ...getObjectValidation(
                                    val[singleVal],
                                    dataFormatted,
                                    (baseString ? baseString + divisor : "") +
                                    singleInt +
                                    divisor +
                                    singleVal
                                ),
                            };
                        });
                    }
                });
            }

        });
    }
    return obj;
};

const getDataObject = (object: any, pre: string[] = []) => {
    return Object.keys(object).reduce((newObj: any, ele) => {
        if (isObject(object[ele])) {
            newObj = {...newObj, ...getDataObject(object[ele], [...pre, ele])};
        } else {
            newObj[[...pre, ele].join(divisor)] = object[ele];
        }
        return newObj;
    }, {});
};

export const setObjForm = (obj: { [key: string]: any }) => {
    return Object.keys(obj).reduce((o: { [key: string]: any }, ele) => {
        if (isObject(obj[ele]) || isArray(obj[ele])) {
            o = {...o, ...getDataObject(obj[ele], [ele])};
        } else {
            o[ele] = obj[ele];
        }
        return o;
    }, {});
};

export const getObjForm = (objData: { [key: string]: any }) => {
    return Object.keys(objData).reduce((obj: any, key: string) => {
        if (key.indexOf(divisor) !== -1) {
            let arr = key.split(divisor);
            let string = "obj";
            arr.forEach((ele, index) => {
                string = string + "['" + ele + "']";
                if (!eval(string)) {
                    const type = arr[index + 1] && !isNaN(+arr[index + 1]) ? "[]" : "{}";
                    eval(string + " = " + type);
                }
            });
            eval(
                "obj" + arr.map((el) => "['" + el + "']").join("") + "=objData[key]"
            );
        } else {
            obj[key] = objData[key];
        }
        return obj;
    }, {});
};

export const decriptStructureForm = () => {
};
