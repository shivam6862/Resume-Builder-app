import React from "react";
import Style from "../Styles/SaveButton.module.css";
import { useSelector } from "react-redux";
import useResumeSave from "../Hook/useResumeSave";
import { useNotification } from "../Hook/useNotification";

interface SaveButtonProps {
  page: string;
  findIn: string;
  id: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ page, findIn, id }) => {
  const { NotificationHook } = useNotification();
  const { ResumeSave } = useResumeSave();
  const data = useSelector((state: any) => state.userResume[findIn]);
  const handleaddNewNotification = async () => {
    var sendData;
    if (Array.isArray(data)) sendData = data.find((item: any) => item.id == id);
    else sendData = data;
    const response = await ResumeSave(sendData, findIn);
    if (response == "Success")
      NotificationHook(page + " submitted successfully!", "Success");
  };
  return (
    <div className={Style.container}>
      <div className={Style.button} onClick={handleaddNewNotification}>
        Add and Save
      </div>
    </div>
  );
};

export default SaveButton;
