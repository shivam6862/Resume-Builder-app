import { addNewNotification } from "../Store/notificationSlice";
import { useDispatch } from "react-redux";
import { useLocationLocalStorage } from "./LocationLocalStorage";

const useAuth = () => {
  const dispatch = useDispatch();
  const { updatePersonalDetails } = useLocationLocalStorage();
  const Auth = async (data: any, type: string) => {
    try {
      const response = await fetch(`http://localhost:8080/${type}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responsedata = await response.json();
      dispatch(addNewNotification(responsedata.message, "Info"));
      if (responsedata.navigate == "true" && type == "verify") {
        updatePersonalDetails(responsedata);
      }
      return responsedata.navigate;
    } catch (err) {
      console.log(err);
      dispatch(addNewNotification("Check your connection!", "Error"));
      return "false";
    }
  };
  return { Auth };
};

export default useAuth;
