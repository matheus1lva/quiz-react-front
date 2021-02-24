import { configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./reducers/ScoreSlice";

export default configureStore({
  reducer: {
    score: ScoreSlice,
  },
});
