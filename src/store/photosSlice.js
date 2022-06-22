import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, isError: false, data: null };

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getPhotosRequest(state) {
      state.isLoading = true;
    },
    getPhotosSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getPhotosFailure(state) {
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { getPhotosRequest, getPhotosSuccess, getPhotosFailure } =
  photosSlice.actions;

export default photosSlice.reducer;
