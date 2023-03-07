import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface InitialStateProps {
  n: number
  stopLoad: boolean
  fixedLoad: boolean
}
const initialState: InitialStateProps = {
  n: 0,
  stopLoad: false,
  fixedLoad: false
}

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    incrementN: (state) => {
      state.n = state.n + 1
    },
    decrementN: (state) => {
      state.n = state.n > 0 ? state.n - 1 : 0
    },
    setStopLoad: (state, action: PayloadAction<boolean>) => {
      state.stopLoad = action.payload
    },
    setFixedLoad: (state, action: PayloadAction<boolean>) => {
      state.fixedLoad = action.payload
    },
  },
})

export const { incrementN, decrementN, setFixedLoad,  setStopLoad} = loadSlice.actions

export const selectActiveLoad = (state: { load: InitialStateProps }) => !state.load.stopLoad && (!!state.load.n || state.load.fixedLoad)

export default loadSlice.reducer
