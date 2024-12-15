import { createSlice, current } from '@reduxjs/toolkit';

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
    addLike: (state, action) => {
      // console.log(action.payload, 'action.payload iz reduxa')
      const id = action.payload
      const currentFeedback = state.feedback.filter((feed) => feed.id === id)
      console.log('currentFeedback', currentFeedback)
      const { comment_id } = action.payload;

     

      
    },
  },
});

export const { setFeedBack, addComment, addAnswer, addLike } = feedBackSlice.actions;
export default feedBackSlice.reducer;
