import { configureStore } from '@reduxjs/toolkit';
import { setCategory } from './slices/categorySlice';

const store = configureStore({
  reducer: {
    categories: setCategory,
  },
});

export default store;
