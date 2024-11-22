import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [], 
    currentCategory: '',
    currentSort: ''
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
    setCurrentSort: (state, action) => {
      state.currentSort = action.payload
    },
  },
});

export const { setCategories, addCategory, setCurrentCategory, setCurrentSort } = categorySlice.actions;
export default categorySlice.reducer;
