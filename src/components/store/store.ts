import { configureStore } from '@reduxjs/toolkit';
import { setCategory } from './slices/categorySlice';

const store = configureStore({
  reducer: {
    category: setCategory,
  },
});

export default store;
