import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import JobExperienceItem from "./JobExperienceItem";

const JobExperience: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Job Experience" />
      <JobExperienceItem />
    </div>
  );
};

export default JobExperience;
