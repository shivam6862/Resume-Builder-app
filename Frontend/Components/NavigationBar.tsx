import React from "react";
import Style from "../Styles/NavigationBar.module.css";

const NavigationBar: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>NavigationBar</div>
    </div>
  );
};

export default NavigationBar;
