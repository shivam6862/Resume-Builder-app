import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InternshipDetailsItem from "./InternshipDetailsItem";

const InternshipDetails: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Internship Details" />
      <InternshipDetailsItem />
    </div>
  );
};

export default InternshipDetails;
