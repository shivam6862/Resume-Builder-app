import React from "react";
import Style from "../Styles/SaveButton.module.css";

const SaveButton: React.FC = () => {
  const HandleClick = (click: string) => {
    console.log(click);
  };
  return (
    <div className={Style.container}>
      <div
        className={Style.button}
        onClick={() => {
          HandleClick("Clicked!");
        }}
      >
        Add and Save
      </div>
    </div>
  );
};

export default SaveButton;
