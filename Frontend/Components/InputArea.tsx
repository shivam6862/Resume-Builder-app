import React from "react";
import Style from "../Styles/InputArea.module.css";

const InputArea: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.input}>
        <input type="text" />
      </div>
    </div>
  );
};

export default InputArea;
