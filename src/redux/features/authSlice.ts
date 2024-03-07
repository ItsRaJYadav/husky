import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { authInitialState, AuthState, UserData } from "@/types/types";

import { login } from "../services/authService";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    return login(credentials);
  }
);


export const logout = createAction("auth/logout");

export const signInStart = createAction("auth/signInStart");
export const signInSuccess = createAction<UserData>("auth/signInSuccess");
export const signInFailure = createAction<string>("auth/signInFailure");


const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.userType = action.payload.username;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
        state.userType = null;
      })
      .addCase(logout, (state) => {
        state.user = null;
        state.userType = null;
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state?.auth?.user;
export const selectLoading = (state: { auth: AuthState }) => state?.auth?.loading;
export const selectError = (state: { auth: AuthState }) => state?.auth?.error;

export default authSlice.reducer;
