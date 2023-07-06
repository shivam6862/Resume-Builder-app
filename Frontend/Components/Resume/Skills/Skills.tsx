import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";

const Skills: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Skills" />
    </div>
  );
};

export default Skills;
