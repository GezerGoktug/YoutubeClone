import { configureStore } from "@reduxjs/toolkit";
import { videoSlice } from "./slices/videoSlice";
import { videoDetailSlice } from "./slices/videoDetailSlice";

export const store = configureStore({
  reducer: {
    videosSlice: videoSlice.reducer,
    detailSlice: videoDetailSlice.reducer,
  },
});
