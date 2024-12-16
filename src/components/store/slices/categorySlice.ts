import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Feedback } from '../../types/types';

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
        if (feedback.isLiked) {
          feedback.upvotes -= 1; 
          toast.success('Successfully disliked feedback');
        } else {
          feedback.upvotes += 1;
          toast.success('Successfully liked feedback');
        }
        feedback.isLiked = !feedback.isLiked;
      }
    },
  },
});

export const { setCategories, addCategory, setCurrentCategory, setCurrentSort, addLike } = categorySlice.actions;
export default categorySlice.reducer;
