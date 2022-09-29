import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionReducer from './mission/missionSlice';

const Store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default Store;
