import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAllUsers = createAsyncThunk("allUsers", async () => {
  try {
    const response = await axios.get("http://localhost:8080/users/all");
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});





const UserSlice = createSlice({
  name: "allUsers",
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isLoader = true;
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});





export default UserSlice.reducer;