export interface ItemListTabPillsModel {

    name?: string,
    title: string,
    id?: string,
    link: string
}


export interface TabPillsModel {
    list: ItemListTabPillsModel[],
    clickHandler: (link: string) => void,
    linkActive: string
}