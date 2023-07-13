import { useLocationLocalStorage } from "./LocationLocalStorage";
import { useNotification } from "./useNotification";

const useResumeSave = () => {
  const { NotificationHook } = useNotification();
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const ResumeSave = async (data: any, place: string) => {
    try {
      const userData = fetchPersonalDetails();
      const userId = userData.id;
      const token = userData.token;
      const id = data.id;
      const response = await fetch(
        `http://localhost:8080/resume/${userId}/${place}/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      return responsedata.type;
    } catch (err) {
      console.log(err);
      NotificationHook("Check your connection!", "Error");
      return "Error";
    }
  };
  return { ResumeSave };
};

export default useResumeSave;
