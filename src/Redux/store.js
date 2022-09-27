import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./rocket/rocketSlice";

const Store = configureStore({
  reducer: {
    rocket: rocketReducer
  }
});

export default Store;