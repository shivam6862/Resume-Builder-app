import React from "react";
import Style from "../Styles/LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.spinner}>LoadingSpinner</div>
    </div>
  );
};

export default LoadingSpinner;
