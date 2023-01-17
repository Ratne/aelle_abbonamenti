//deprecated, replace with html.ts in utils

export const mergeClass = (first = "", second = ""): string => {
  return [first, second].join(" ").trim();
};
export const classByArray = (arr: string[]): string => {
  return arr.join(" ");
};
