import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovieShow: true,
};

const ToggleReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleAction: (state, { payload }) => {
      state.selectedMovieShow = payload;
    },
  },
});
export const { toggleAction } = ToggleReducer.actions;
export default ToggleReducer.reducer;
