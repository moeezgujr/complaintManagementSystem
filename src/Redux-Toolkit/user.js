import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { storeUser } = userReducer.actions;
export default userReducer.reducer;
