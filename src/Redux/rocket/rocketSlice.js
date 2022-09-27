import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  try {
    const data = await axios.get("https://api.spacexdata.com/v3/rockets");
    return data.data;
  } catch (error) {
    return error.message;
  }
})

const RocketSlice = createSlice({
  name: "rockets",
  initialState: {rockets: [], status: "idle"},
  reducers: {
    reserverocket: (state, { payload }) => {

    }
  },
  extraReducers: (Builder) => {
    Builder
    .addCase(fetchRockets.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchRockets.fulfilled,(state, action) => {
      const data = [];
      action.payload.map(x => {
        let { id, description, rocket_name, flickr_images } = x;
        flickr_images = flickr_images[0];
        data.push({ id, description, rocket_name, flickr_images });
        return data;
      });
      return {
        ...state,
        rockets: data,
        status: "idle",
      }
    })
    .addCase(fetchRockets.rejected, (state, { error }) => {
      return state.status = error;
    });
  },
});

export const { reserverocket } = RocketSlice.actions;
export const selectAllRockets = (state) => state.rocket;


export default RocketSlice.reducer;