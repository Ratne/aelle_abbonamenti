import { ChangeEvent } from "react";

export type AcceptedChangeEventFormElement =
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;
