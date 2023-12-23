import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: ''
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<string>) => {
      state.score = action.payload;
    },
  }
})


export default scoreSlice.reducer;
export const { setScore } = scoreSlice.actions