import React from "react";
import Style from "../Styles/LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.spinner}>
        Loading
        <div className={Style.loading}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
