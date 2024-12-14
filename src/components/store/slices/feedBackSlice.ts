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
        ...action.payload,
      ];
  },
  addAnswer: (state, action) => {
    const { comment_id, answer } = action.payload;
  
    const commentIndex = state.feedback.Comments.findIndex(
      (comment) => comment.id === comment_id
    );
  
    if (commentIndex !== -1) {
      const commentToUpdate = state.feedback.Comments[commentIndex];
      state.feedback.Comments[commentIndex] = {
        ...commentToUpdate,
        Answers: [...(commentToUpdate.Answers || []), answer],
      };
    }
  },
}
});

export const { setFeedBack, addComment, addAnswer } = feedBackSlice.actions;
export default feedBackSlice.reducer;