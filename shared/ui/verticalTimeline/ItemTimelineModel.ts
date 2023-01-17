export interface itemTimelinesWrapModel extends itemTimelinesModel {
    template?: React.ReactNode,

}

export interface itemTimeLinesBaseModel {
    name: string,
    label: string,
}

export interface itemTimelinesModel extends itemTimeLinesBaseModel {
    state: stateItemTimelinesModel,
    visit?: any
    date: any
}


export type stateItemTimelinesModel = 'complete' | 'inProgress' | 'notComplete'
