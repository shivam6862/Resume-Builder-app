import React from "react";
import Style from "../Styles/SaveButton.module.css";
import { useDispatch } from "react-redux";
import { addNewNotification } from "../Store/notificationSlice";

interface SaveButtonProps {
  page: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ page }) => {
  const dispatch = useDispatch();
  const handleaddNewNotification = () => {
    dispatch(addNewNotification(page + " submitted successfully!", "Info"));
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
