import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useAuth = () => {
  const { NotificationHook } = useNotification();
  const { updatePersonalDetails } = useLocationLocalStorage();
  const Auth = async (data: any, type: string) => {
    try {
      const response = await fetch(`http://localhost:8080/user/${type}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responsedata = await response.json();
      NotificationHook(responsedata.message, responsedata.type);
      if (
        (responsedata.type == "Success" && type == "signin") ||
        (responsedata.type == "Success" && type == "newPassword")
      ) {
        updatePersonalDetails(responsedata.response);
      }
      return responsedata.type;
    } catch (err) {
      console.log(err);
      NotificationHook("Check your connection!", "Error");
      return "false";
    }
  };
  return { Auth };
};

export default useAuth;
