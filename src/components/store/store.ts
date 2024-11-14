import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import feedbackReducer from './slices/feedBackSlice'; 
import userSliceReducer from './slices/feedBackSlice'; 

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    feedback: feedbackReducer, 
    user: userSliceReducer,
  },
});

export default store;
