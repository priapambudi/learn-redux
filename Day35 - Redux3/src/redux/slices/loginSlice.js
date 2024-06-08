import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("isLogin", true);
      state.isLogin = true;
    },
    logout: (state, action) => {
      localStorage.setItem("isLogin", false);
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
