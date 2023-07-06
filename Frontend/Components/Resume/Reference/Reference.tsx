import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import ReferenceItem from "./ReferenceItem";

const Reference: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Reference" />
      <ReferenceItem />
    </div>
  );
};

export default Reference;
