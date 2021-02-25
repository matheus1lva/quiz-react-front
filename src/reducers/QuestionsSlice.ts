import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ENDPOINT_QUERIES =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const request = await fetch(ENDPOINT_QUERIES);
    const response = await request.json();
    return response.results;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    resource: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setQuestions: (state, action) => {
      state.resource = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    ["questions/fetchQuestions/pending"]: (state) => {
      state.isLoading = true;
    },
    ["questions/fetchQuestions/fulfilled"]: (state, action) => {
      state.isLoading = false;
      state.resource = action.payload;
    },
    ["questions/fetchQuestions/rejected"]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuestions, setIsLoading, setError } = questionsSlice.actions;

export default questionsSlice.reducer;
