import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
 
 type UserT = {
  id: string;
  userName: string;
  email: string;
  token: string;
}
 
type AuthState = {
  currentUser: UserT | null;
  error: string;
};
 
const initialState: AuthState = {
  currentUser: null,
  error: "",
};
 
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<UserT | null>) => {
      state.currentUser = action.payload;
      state.error = "";
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.clear();
    },
    resetStore: () => initialState,
  },
});
 
export const { authSuccess, authFailure, logOut, resetStore } =
  userSlice.actions;
export default userSlice.reducer;