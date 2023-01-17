import httpData from "./httpData";

export const getPharmacy = (id: string) => {
    return httpData.other.user.data.pharmacies.find((ele: any) => ele.idDocument === id)
}

export const getPharmacies = (arr: string[]) => {
    return arr.filter(ele => getPharmacy(ele)).map(ele => getPharmacy(ele))
}
