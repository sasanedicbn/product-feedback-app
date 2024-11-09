import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import feedbackReducer from './slices/feedBackSlice'; 

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    feedback: feedbackReducer, 
  },
});

export default store;
