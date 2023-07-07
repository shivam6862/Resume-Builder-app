import React from "react";
import Style from "../../../Styles/Resume.module.css";

interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <div className={Style.container_heading}>
      <div className={Style.heading_heading}>{heading}</div>
    </div>
  );
};

export default Heading;
