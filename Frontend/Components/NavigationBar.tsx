import React from "react";
import Style from "../Styles/NavigationBar.module.css";

interface NavigationBarProps {
  setCurrent: (current: number) => void;
  current: number;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  setCurrent,
  current,
}) => {
  const NavigationBarItem = [
    "Areas of Interest",
    "Education Details",
    "Contact Details",
    "Internship Details",
    "Job Experience",
    "Projects",
    "Achievements",
    "Skills",
    "Extra Curricular",
    "Publications",
    "Reference",
  ];
  const HandleNavigation = (current: number) => {
    setCurrent(current);
  };

  return (
    <div className={Style.container}>
      <div className={Style.box}>
        {NavigationBarItem.map((item, index) => {
          return (
            <div
              className={current == index ? Style.active : Style.item}
              key={index}
              onClick={() => {
                HandleNavigation(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
