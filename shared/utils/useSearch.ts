export function useSearch() {
  const issetText = (value: any, text: string) => {
    return typeof value === "string" || typeof value === "number"
      ? value
          .toString()
          .toLowerCase()
          .trim()
          .indexOf(text.toLocaleLowerCase().trim()) !== -1
      : false;
  };
  const filterArraySearch: <T = { [key: string]: any }>(
      text: string,
      data: T[]
  ) => T[] = (text, data) => {
    return data.filter((ele: { [key: string]: any }) =>
        Object.keys(ele).find((el) => issetText(ele[el], text))
    );
  };

  const filterArraySearchProperty: <T = { [key: string]: any }>(
    data: T[],
    property: string,
    value: any
  ) => T[] = (data, property, value) => {
    return property
      ? data.filter(
          (ele: { [key: string]: any }) =>
            ele[property] !== undefined && ele[property] === value
        )
      : [];
  };
  return {
    filterArraySearch,
    filterArraySearchProperty,
    issetText
  };
}
