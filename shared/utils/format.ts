const formatType: {
  [key: string]: { model: (value: any) => any; view: (value: any) => any };
} = {
  number: {
    model: (num: string): number => {
      return parseFloat(num.replace(/./g, "").replace(/,/g, "."));
    },
    view: (num: number | string): string => {
      if (typeof num === "string") num = parseFloat(num);
      return num !== undefined && num !== null ? num.toLocaleString() : num;
    },
  },
};

export const format = (type: string, value: any) => {
  return formatType[type] ? formatType[type].view(value) : value;
};
