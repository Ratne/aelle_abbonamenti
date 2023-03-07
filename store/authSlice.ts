import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk, RootState} from "./store";

interface InitialStateProps {
  user?: any
  isLogged?: boolean
}
const initialState: InitialStateProps = {
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    resetUser: (state) => {
      state.user = undefined
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
    },
  },
})

export const { setUser, resetUser, setIsLogged} = authSlice.actions

export const logoutAction =
    (): AppThunk =>
        (dispatch) => {
            localStorage.removeItem('token');
          dispatch(setIsLogged(false));
          dispatch(resetUser());
        };

export const loginAction =
    (user: any): AppThunk =>
        (dispatch) => {
          dispatch(setUser(user));
          dispatch(setIsLogged(true));

        };

export const selectUser = (state: RootState) => state.auth.user
export const selectIsLogged = (state: RootState) => state.auth.isLogged

export default authSlice.reducer
