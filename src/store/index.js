import { configureStore } from "@reduxjs/toolkit";
import photos from "store/photosSlice";

const reducer = {
  photos,
};

const store = configureStore({ reducer });

export default store;
