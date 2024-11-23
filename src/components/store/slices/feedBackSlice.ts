import { createSlice } from '@reduxjs/toolkit';

const feedBackSlice = createSlice({
  name: 'feedback',
  initialState: {
    feedback: null, 
    comments: null,
  },
  reducers: {
    setFeedBack: (state, action) => {
      state.feedback = action.payload; 
    },
    setComments: (state, action) => {
      state.comments = action.payload; 
    },

  },
});

export const { setFeedBack, setComments } = feedBackSlice.actions;
export default feedBackSlice.reducer;