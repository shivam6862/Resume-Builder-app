import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import EducationDetailsItem from "./EducationDetailsItem";

const EducationDetails: React.FC = () => {
  const EducationDetailsData = useSelector(
    (state: RootState) => state.userResume.education
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Education Details" />
      {EducationDetailsData.map((item) => (
        <EducationDetailsItem
          institution={item.institution}
          year={item.year}
          degree={item.degree}
          cgpa={item.cgpa}
          id={item.id}
          field={item.field}
          graduation={item.graduation}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default EducationDetails;
