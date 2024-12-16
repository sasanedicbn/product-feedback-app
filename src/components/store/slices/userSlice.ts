import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user") as string) || null, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem("user"); 
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
