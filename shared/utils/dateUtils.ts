export const stringDateToTimestamp = (stringDate: any): any =>
    typeof stringDate === 'string' ? new Date(stringDate).getTime() : stringDate

export const getTodayDate = () => new Date()
export const getNBackDate = (n: number) => {
    return new Date(getTodayDate().setDate(getTodayDate().getDate() - n))
}

export const getTodayTimestamp = () => stringDateToTimestamp(getTodayDate())

export const isSmallestDate = (date1: any, date2: any) => {
    return stringDateToTimestamp(date2) > stringDateToTimestamp(date1)
}

export const isOldestDate = (date1: any, date2: any) => {
    return stringDateToTimestamp(date2) < stringDateToTimestamp(date1)
}
export const minDate = (date1: any, date2: any) => {
    return stringDateToTimestamp(date2) < stringDateToTimestamp(date1)
        ? date2
        : date1
}
export const maxDate = (date1: any, date2: any) => {
    return stringDateToTimestamp(date2) > stringDateToTimestamp(date1)
        ? date2
        : date1
}
export const padNumber = (value: number) => `0${value}`.slice(-2)
export const padNumberYear = (value: number) => `0000${value}`.slice(-4)

export const localdateString = (date: string | number | Date) => {
    return new Date(date).toLocaleDateString('it-IT')
}

export const toEnDateString = (date: string | number | Date) => {
    const d = new Date(date)
    return `${padNumberYear(d.getFullYear())}-${padNumber(d.getMonth() + 1)}-${padNumber(
        d.getDate()
    )}`
}

export const toEnDateStringWithHours = (date: string | number | Date) => {
    const d = new Date(date)
    return `${padNumberYear(d.getFullYear())}-${padNumber(d.getMonth() + 1)}-${padNumber(d.getDate())}T${padNumber(d.getHours())}:${padNumber(d.getMinutes())}`
}

export const dateFormatGGmmmYYYY = (date: string | number | Date, locales: string = 'it-IT') =>
    date && new Date(date).toLocaleString(locales, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
export const dateFormatGGmmmYYYYhhMM = (date: string | number | Date, locales: string = 'it-IT') =>
    new Date(date).toLocaleString(locales, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
export const dateFormatGGmmmYY = (date: string | number | Date, locales: string = 'it-IT') =>
    new Date(date).toLocaleString(locales, {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
    })
export const dateFormatGGmmmYYhhMM = (date: string | number | Date, locales: string = 'it-IT') =>
    new Date(date).toLocaleString(locales, {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
    })
export const dateStartDayTime = (d: string | number | Date) => {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    return date;
}

export const dateEndDayTime = (d: string | number | Date) => {
    const date = new Date(d);
    date.setHours(23, 59, 59, 999);
    return date;
}


export const millisToHoursMinutes = (date: any) => {
    return {
        days: Math.floor(date / (1000 * 60 * 60 * 24)),
        hours: padNumber(Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: padNumber(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: padNumber(Math.floor((date % (1000 * 60)) / (1000)))
    }
}
