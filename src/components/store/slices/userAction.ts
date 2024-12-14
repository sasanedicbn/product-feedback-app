import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const userAction = createSlice({
  name: "user",
  initialState,
  reducers: {
   addLike:(state,action) {

   }
  },
});

export const { addLike, } = userAction.actions;
export default userAction.reducer;
