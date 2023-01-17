import validations from "./validations";

export const checkValidations: (
  value: string,
  role: { [key: string]: boolean } | undefined
) => boolean = (value, role) => {
  const roleActive = role ? Object.keys(role).filter((el) => role[el]) : [];
  return roleActive.reduce((valid: boolean, role: string) => {
    let check = checkValidation(role, value);
    return !check ? check : valid;
  }, true);
};

export const checkValidation = (
  role: string,
  value: string,
  data?: { [key: string]: any } | undefined,
  moreData?: { [key: string]: any } | undefined
) => {
  const obj = { value, data, moreData };
  return validations[role](obj);
};
