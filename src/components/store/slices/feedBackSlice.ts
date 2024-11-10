import { createSlice } from '@reduxjs/toolkit';

const feedBackSlice = createSlice({
  name: 'feedback',
  initialState: {
    feedback: null, 
  },
  reducers: {
    setFeedBack: (state, action) => {
      state.feedback = action.payload; 
      
    }
  },
});

export const { setFeedBack } = feedBackSlice.actions;
export default feedBackSlice.reducer;