import React from "react";
import Style from "../Styles/SaveButton.module.css";

const SaveButton: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.button}>SaveButton</div>
    </div>
  );
};

export default SaveButton;
