import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import EducationDetailsItem from "./EducationDetailsItem";

const EducationDetails: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Education Details" />
      <EducationDetailsItem />
    </div>
  );
};

export default EducationDetails;
