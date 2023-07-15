import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import JobExperienceItem from "./JobExperienceItem";

const JobExperience: React.FC = () => {
  const JobExperienceData = useSelector(
    (state: RootState) => state.userResume.JobExperience
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Job Experience" />
      {JobExperienceData.map((item) => (
        <JobExperienceItem
          position={item.Position}
          organisation={item.Organisation}
          description={item.Description}
          startDate={item.startDate}
          endDate={item.endDate}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default JobExperience;
