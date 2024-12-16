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
    addLike: (state, action) => {
      const feedbackId = action.payload;
      const feedback = state.items.find((item) => item.id === feedbackId);
    
      if (feedback) {
        feedback.upvotes = feedback.isLiked ? feedback.upvotes - 1 : feedback.upvotes + 1;
        feedback.isLiked = !feedback.isLiked;
      }
    },
       
  },
});

export const { setCategories, addCategory, setCurrentCategory, setCurrentSort, addLike } = categorySlice.actions;
export default categorySlice.reducer;
