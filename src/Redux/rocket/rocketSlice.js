import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  try {
    const data = await axios.get('https://api.spacexdata.com/v3/rockets');
    return data.data;
  } catch (error) {
    return error.message;
  }
});

const RocketSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [], status: 'idle' },
  reducers: {
    rocketStatus: (state, { payload }) => {
      const data = state.rockets.map((x) => (x.id === payload ? { ...x, booked: !x.booked } : x));
      return {
        ...state,
        rockets: data,
      };
    },
  },
  extraReducers: (Builder) => {
    Builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const data = [];
        action.payload.map((x) => {
          const {
            id, description, rocket_name, flickr_images,
          } = x;
          data.push({
            id, description, rocket_name, flickr_images, booked: false,
          });
          console.log(data);
          return data;
        });
        return {
          ...state,
          rockets: data,
          status: 'idle',
        };
      })
      .addCase(fetchRockets.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const { rocketStatus } = RocketSlice.actions;
export const selectAllRockets = (state) => state.rocket;

export default RocketSlice.reducer;
