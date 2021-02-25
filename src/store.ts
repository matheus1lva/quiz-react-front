import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./reducers/ScoreSlice";
import QuestionsSlice from "./reducers/QuestionsSlice";

const rootReducer = combineReducers({
  score: ScoreSlice,
  questions: QuestionsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
