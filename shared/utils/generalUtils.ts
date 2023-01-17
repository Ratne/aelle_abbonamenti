export const notNull = (value: any) => {
  return value !== undefined && value !== null && value !== "";
};
export const padNum = (value: number | string, lenght: number = 2, symbol: string = '0') => (Array(lenght).join(symbol) + value).slice(-lenght);
