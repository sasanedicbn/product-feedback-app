import { createSlice } from '@reduxjs/toolkit';

const feedBackSlice = createSlice({
  name: 'feedback',
  initialState: {
    feedback: null, 
  },
  reducers: {
    setFeedBack: (state, action) => {
      state.feedback = action.payload; 
    },
    addComment: (state, action) => {
      state.feedback.Comments = [
        ...(state.feedback.Comments || []),
        action.payload,
      ];
  },
});

export const { setFeedBack, addComment } = feedBackSlice.actions;
export default feedBackSlice.reducer;