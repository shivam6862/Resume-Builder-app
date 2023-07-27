import { useDispatch } from "react-redux";
import { addNewNotification } from "../Store/notificationSlice";

export const useNotification = () => {
  const dispatch = useDispatch();
  const NotificationHook = (message: string, type: string) => {
    addNewNotification(message, type, dispatch);
  };
  return {
    NotificationHook,
  };
};
