import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    correctAnswers: [],
    wrongAnswers: [],
  },
  reducers: {
    addCorrectAnswer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.correctAnswers.push(action.payload);
    },
    addWrongAnswer: (state, action) => {
      state.wrongAnswers.push(action.payload);
    },
    startAgain: (state) => {
      state = {
        correctAnswers: [],
        wrongAnswers: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCorrectAnswer,
  addWrongAnswer,
  startAgain,
} = scoreSlice.actions;

export default scoreSlice.reducer;
