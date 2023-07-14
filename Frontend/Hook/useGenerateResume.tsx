import { useNotification } from "./useNotification";

const useGenerateResume = () => {
  const { NotificationHook } = useNotification();
  const GenerateResume = async (userid: string) => {
    try {
      const response = await fetch(`http://localhost:8080/resume/${userid}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const responsedata = await response.json();
      console.log(responsedata);
      return "Success";
    } catch (err) {
      console.log(err);
      NotificationHook("Check your connection!", "Error");
      return "Error";
    }
  };
  return { GenerateResume };
};

export default useGenerateResume;
