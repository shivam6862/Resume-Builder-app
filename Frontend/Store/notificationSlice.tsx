import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Dispatch } from "redux";

interface Notification {
  message: string;
  id: string;
  type: string;
}
interface NotificationState {
  typeMessage: Notification[];
}
const initialState: NotificationState = {
  typeMessage: [],
};
type BackgroundColor = {
  Success: string;
  Error: string;
  Info: string;
  Warn: string;
};
const backGroundColor: BackgroundColor = {
  Success: "#2ecc71",
  Error: "#e74c3c",
  Info: "#3498db",
  Warn: "#f1c40f",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Notification>) => {
      state.typeMessage.push(action.payload);
    },
    deleteMessage: (state, action: PayloadAction<string>) => {
      state.typeMessage = state.typeMessage.filter(
        (message) => message.id !== action.payload
      );
    },
  },
});

export const { addMessage, deleteMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
export const addNewNotification = (
  message: string,
  type: string,
  dispatch: Dispatch
) => {
  const color: string = backGroundColor[type as keyof BackgroundColor];
  const notification: Notification = {
    message,
    id: uuidv4(),
    type: color,
  };
  dispatch(addMessage(notification));
};
