import React from "react";

export type UseFormSubmitModel = (
  event: React.FormEvent<HTMLFormElement> | undefined,
  data: { [key: string]: any },
  dataNotFormatted: { [key: string]: any }
) => void;

export interface useFormRoleValidationsModel {
  [key: string]: any;
}
export interface useFormDataInitModel {
  [key: string]: any;
}

export interface LastChangeModel {
  newValue?: { [key: string]: any };
  newValueRaw?: { [key: string]: any };
}

export type ChangeValueEndType = (data: any, name: LastChangeModel) => void;

export interface UseFormOthersModel {
  changeValueEnd?: ChangeValueEndType;
}
