import * as validationType from "./validationType";
import {stringDateToTimestamp} from "../../dateUtils";
export interface DataValidation {
  value: string;
  data?: { [key: string]: any } | undefined;
  moreData?: { [key: string]: any };
}
// const cfRegex = /^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;
const url = /^(ftp|http|https):\/\/[^ "]+$/;
type ValidationData = { [key: string]: (element: DataValidation) => boolean };
const isNumber = (value: any) => {
  return value !== undefined && value !== "" ? !Number.isNaN(+value) : true;
};
const checkRequired = (value: string) => {
  return (
    value !== undefined &&
    ((typeof value === "string" && value !== "") ||
      (typeof value === "boolean" && value !== undefined) ||
      typeof value === "number" ||
      (Array.isArray(value) && !!value.length))
  );
};

const checkLength = (value: number, length: number) => {
  return isNumber(value) && value !== undefined && value !== 0
    ? value === length
    : true;
};
const checkMinLength = (value: number, length: number) => {
  return isNumber(value) && value !== undefined && value !== 0
    ? value >= length
    : true;
};
const checkMaxLength = (value: number, length: number) => {
  return isNumber(value) && value !== undefined && value !== 0
    ? value <= length
    : true;
};


const checkMinNumber = (value: number, minValue: number) => {
  return isNumber(value) && value !== undefined ? value > minValue : true;
};

const checkMaxNumber = (value: number, maxValue: number) => {
  return isNumber(value) && value !== undefined && value !== 0
    ? value <= maxValue
    : true;
};
const checkMinDate = (value: string | number, minDate: number | string) => {
  return value && minDate
      ? stringDateToTimestamp(value) >= stringDateToTimestamp(minDate)
      : true;
};

const checkMaxDate = (value: string | number, maxDate: number | string) => {
  return value && maxDate
      ? stringDateToTimestamp(value) <= stringDateToTimestamp(maxDate)
      : true;
};



const checkUrl = (value: string) => {
  return url.test(String(value));
};

// const checkPIVA = (value: string) => {
//   return checkLength(value?.length, 11) && isNumber(value);
// };

const validations: ValidationData = {
  [validationType.required]: ({ value }: DataValidation) =>
    checkRequired(value),

  [validationType.email]: ({ value }: DataValidation) =>
    value !== undefined && value !== "" ? /\S+@\S+\.\S+/.test(value) : true,

  [validationType.length]: ({ value, moreData }: DataValidation) => {
    return checkLength(value?.length, moreData?.length);
  },
  [validationType.cf]: ({ value }: DataValidation) => {
    return checkLength(value?.length, 16);
  },
  [validationType.piva]: ({ value }: DataValidation) => {
    return checkLength(value?.length, 11);
  },
  [validationType.cap]: ({ value }: DataValidation) => {
    return isNumber(value) && checkLength(value?.length, 5);
  },

  [validationType.confirm]: ({ value, data, moreData }: DataValidation) =>
    data &&
    moreData &&
    moreData.fieldCompare &&
    value === data[moreData.fieldCompare],

  [validationType.requiredOne]: ({ value, data, moreData }: DataValidation) => {
    return (
      data &&
      moreData &&
      moreData.fieldCompare &&
      (checkRequired(value) || checkRequired(data[moreData.fieldCompare]))
    );
  },

  [validationType.minLength]: ({ value, moreData }) =>
    checkMinLength(value?.length, moreData?.min),

  [validationType.maxLength]: ({ value, moreData }) =>
    checkMaxLength(value?.length, moreData?.max),

  [validationType.percentage]: ({ value }) => {
    return (
      isNumber(value) &&
      checkMinLength(+value, 0) &&
      checkMaxLength(+value, 100)
    );
  },

  [validationType.isNumber]: ({ value }) => isNumber(value),

  [validationType.upperCharacter]: ({ value }) => /.*[A-Z]/.test(value),

  [validationType.specialCharacter]: ({ value }) =>
    /.*[\@#!~$%^&*()-+\/:.,<>?|]/.test(value),

  [validationType.oneNumber]: ({ value }) => /.*\d/.test(value),

  [validationType.minNumber]: ({ value, data, moreData }) => {
    return checkMaxNumber(Number(value), moreData?.max);
  },
  [validationType.maxNumber]: ({ value, data, moreData }) => {
    return checkMinNumber(Number(value), moreData?.min);
  },
  [validationType.url]: ({ value }: DataValidation) => {
    return checkUrl(value);
  },
  [validationType.minDate]: ({ value, data, moreData }) =>
      checkMinDate(value, moreData?.min || data?.[moreData?.fieldMin]),

  [validationType.maxDate]: ({ value, data, moreData }) =>
      checkMaxDate(value, moreData?.max || data?.[moreData?.fieldMax]),
};

export default validations;
