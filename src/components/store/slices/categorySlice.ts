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
      // console.log(action.payload, 'action.payload iz reduxa')
      const id = action.payload
      const currentFeedback = state.feedback.filter((feed) => feed.id === id)
      console.log('currentFeedback', currentFeedback) 
    },
  },
});

export const { setCategories, addCategory, setCurrentCategory, setCurrentSort, addLike } = categorySlice.actions;
export default categorySlice.reducer;
