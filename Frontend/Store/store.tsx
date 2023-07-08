import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notificationSlice";
import userResumeReducer from "./ResumeSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    userResume: userResumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
