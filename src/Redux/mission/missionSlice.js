import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMissions = createAsyncThunk('mission/fetchMissions', async () => {
  try {
    const data = await axios.get("https://api.spacexdata.com/v3/missions");
    return data.data;
  } catch (error) {
    return error.message;
  }
})

const MissionSlice = createSlice({
  name: "missions",
  initialState: {missions: [], status: "idle"},
  reducers: {
    joinMission: (state, { payload }) => {

    }
  },
  extraReducers: (Builder) => {
    Builder
    .addCase(fetchMissions.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchMissions.fulfilled,(state, action) => {
      const data = [];
      action.payload.map(x => {
        let { mission_id, description, mission_name } = x;
        data.push({ mission_id, description, mission_name });
        return data;
      });
      return {
        ...state,
        missions: data,
        status: "idle",
      }
    })
    .addCase(fetchMissions.rejected, (state, { error }) => {
      return state.status = error;
    });
  },
});

export const { joinMission } = MissionSlice.actions;
export const selectAllMissions = (state) => state.mission;

export default MissionSlice.reducer;