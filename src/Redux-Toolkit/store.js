import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user";
import ToggleReducer from "./buttonSlice";
export const store = configureStore({
  reducer: {
    movies: ToggleReducer,
    user: useReducer,
  },
});
