export const isFull = (arr: any = {}): boolean => {
  return arr && arr.length;
};

export const isEmpty = (arr: any = {}): boolean => {
  return !isFull(arr);
};

export const isArray = (arr: any): boolean => {
  return Array.isArray(arr);
};


export const getArrayByNumber = (n: number, increment: number = 0) => {
  return Array(n).fill('').map((_, i) => i+increment);
}
