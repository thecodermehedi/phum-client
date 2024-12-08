import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
 userId: string; // A unique identifier for the user
 role: string;   // The role of the user
 iat: number;    // Issued at time (timestamp)
 exp: number;    // Expiration time (timestamp)
};

type TAuthState = {
 user: null | TUser;
 token: null | string;
}

const initialState: TAuthState = {
 user: null ,
 token: null
};

const authSlice = createSlice({
 name: "auth",
 initialState,
 reducers: {
  setUser: (state, action) => {
   const { user, token } = action.payload;
   state.user = user;
   state.token = token;
  },
  logout: (state) => {
   state.user = null;
   state.token = null;
  },
 }
})

export const { setUser, logout } = authSlice.actions;

export const selectCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer;

