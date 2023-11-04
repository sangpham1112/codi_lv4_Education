import { createSlice } from "@reduxjs/toolkit";
import { Logout } from "../../api/User";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserLogin: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser: (state) => {
      Logout();
      localStorage.removeItem("user");
      state.user = [];
    },
  },
});

export const { saveUserLogin, logoutUser } = userSlice.actions;

export default userSlice.reducer;
