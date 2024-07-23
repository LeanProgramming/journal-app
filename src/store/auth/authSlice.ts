import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  status: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photo?: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: "checking", //  'checking' ,'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photo: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<any>) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photo = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }: PayloadAction<any>) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photo = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
