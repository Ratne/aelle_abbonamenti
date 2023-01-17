export const generateTempId: () => number = () => generateDateNow() * Math.round(Math.random() * 100)

export const generateDateNow: () => number = () => Date.now();
