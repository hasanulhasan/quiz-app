import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore: (state) => {
      state.score = state.score + 1;
    },
    zeroScore: (state) => {
      state.score = 0;
    },
  }
})


export default scoreSlice.reducer;
export const { setScore, zeroScore } = scoreSlice.actions