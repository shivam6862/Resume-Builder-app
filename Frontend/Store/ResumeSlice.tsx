import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./Resumeinterface";

const ResumeSlice = createSlice({
  name: "userResume",
  initialState,
  reducers: {
    deleteField: (
      state,
      action: PayloadAction<{ field: string; id: string }>
    ) => {
      const { field, id } = action.payload;
      state[field] = state[field].filter((item) => item.id !== id);
    },
    saveField: (state, action: PayloadAction<{ field: string; data: any }>) => {
      let { field, data } = action.payload;
      if (Array.isArray(state[field])) state[field] = [...state[field], data];
      else state[field] = data;
    },
    updateField: (
      state,
      action: PayloadAction<{ field: string; data: any }>
    ) => {
      const { field, data } = action.payload;
      if (Array.isArray(state[field])) {
        state[field] = state[field].map((item) =>
          item.id === data.id ? data : item
        );
      } else if (typeof state[field] === "object") {
        state[field] = data;
      }
    },
  },
});

export const { deleteField, saveField, updateField } = ResumeSlice.actions;

export default ResumeSlice.reducer;
