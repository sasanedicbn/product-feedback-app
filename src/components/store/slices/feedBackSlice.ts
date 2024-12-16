import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback, Comment } from '../../types/types'; 

interface FeedbackState {
  feedback: Feedback | null;
}

const initialState: FeedbackState = {
  feedback: null,
};

const feedBackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedBack: (state, action: PayloadAction<Feedback>) => {
      console.log('setfeedback', action.payload);
      state.feedback = action.payload;
    },

    addComment: (state, action: PayloadAction<Comment>) => {
      if (!state.feedback) {
        console.error('Feedback is not initialized.');
        return;
      }

      if (!state.feedback.Comments) {
        state.feedback.Comments = [];
      }

      state.feedback.Comments = [
        ...state.feedback.Comments,
        action.payload,
      ];
    },

    addAnswer: (
      state,
      action: PayloadAction<{ comment_id: number; answer: any }>
    ) => {
      if (!state.feedback || !state.feedback.Comments) {
        console.error('Feedback or comments are not initialized.');
        return;
      }

      const { comment_id, answer } = action.payload;

      const commentIndex = state.feedback.Comments.findIndex(
        (comment:any) => comment.id === comment_id
      );

      if (commentIndex !== -1) {
        const commentToUpdate = state.feedback.Comments[commentIndex];

        if (!commentToUpdate.Answers) {
          commentToUpdate.Answers = [];
        }

        state.feedback.Comments[commentIndex] = {
          ...commentToUpdate,
          Answers: [...commentToUpdate.Answers, answer],
        };
      } else {
        console.error(`Comment with id ${comment_id} not found.`);
      }
    },
  },
});

export const { setFeedBack, addComment, addAnswer } = feedBackSlice.actions;
export default feedBackSlice.reducer;
