import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: FeedbackState = {
  feedback: null,
};

const feedBackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedBack: (state, action: PayloadAction<Feedback>) => {
      state.feedback = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment[]>) => {
      state.feedback!.Comments = [
        ...(state.feedback?.Comments || []),
        ...action.payload,
      ];
    },
    addAnswer: (
      state,
      action: PayloadAction<{ comment_id: number; answer: Answer }>
    ) => {
      const { comment_id, answer } = action.payload;
      const commentIndex = state.feedback?.Comments?.findIndex(
        (comment) => comment.id === comment_id
      );

      if (commentIndex !== undefined && commentIndex !== -1) {
        const commentToUpdate = state.feedback!.Comments![commentIndex];
        state.feedback!.Comments![commentIndex] = {
          ...commentToUpdate,
          Answers: [...(commentToUpdate.Answers || []), answer],
        };
      }
    },
  },
});

export const { setFeedBack, addComment, addAnswer } = feedBackSlice.actions;
export default feedBackSlice.reducer;
type Answer = {
  id: number;
  text: string;
}

type Comment = {
  id: number;
  text: string;
  Answers?: Answer[];
}

type Feedback = {
  id: number;
  title: string;
  description: string;
  Comments?: Comment[];
}

type  FeedbackState = {
  feedback: Feedback | null;
}
