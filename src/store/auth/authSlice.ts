import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  status: string
  uid: number | null;
  email: string | null;
  displayName: string | null;
  photo: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated', //  'checking' ,'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photo: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,  action: PayloadAction<any> ) => {
    },
    logout: (state, payload) => {

    },
    checkingCredentials: (state) => {
        state.status = 'checking';
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;