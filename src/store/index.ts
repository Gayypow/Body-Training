import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./video/videoSlice";

const store = configureStore({
  reducer: {
    video: videoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
