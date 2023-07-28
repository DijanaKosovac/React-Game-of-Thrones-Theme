import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./character-slice";

const store = configureStore({
  reducer: characterReducer,
});

export default store;