import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
