import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import feedbackReducer from './slices/feedBackSlice'; 
import userReducer from './slices/userSlice'; 

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    feedback: feedbackReducer, 
    user: userReducer,
  },
});

export default store;
