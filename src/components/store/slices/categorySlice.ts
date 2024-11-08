import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],  // Dodaj 'items' za bolje strukturirano stanje
  },
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload; // Podesi kompletan niz kategorija
    },
    addCategory: (state, action) => {
      state.items = action.payload
    },
  },
});

export const { setCategories, addCategory } = categorySlice.actions;
export default categorySlice.reducer;
