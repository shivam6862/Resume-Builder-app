import React from "react";
import Style from "../Styles/Resume.module.css";
import LoadingSpinner from "./LoadingSpinner";
import InputArea from "./InputArea";
import SaveButton from "./SaveButton";

const Pdf: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>PDF</div>
      <LoadingSpinner />
      <InputArea />
      <SaveButton />
    </div>
  );
};

export default Pdf;
