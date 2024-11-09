import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [], 
  },
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload; 
    },
    addCategory: (state, action) => {
      state.items = action.payload
    },
  },
});

export const { setCategories, addCategory } = categorySlice.actions;
export default categorySlice.reducer;
