import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [], 
    currentCategory: ''
  },
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload; 
    },
    addCategory: (state, action) => {
      state.items = action.payload
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
  },
});

export const { setCategories, addCategory, setCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
