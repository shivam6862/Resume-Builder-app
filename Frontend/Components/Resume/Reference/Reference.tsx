import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import ReferenceItem from "./ReferenceItem";

const Reference: React.FC = () => {
  const ReferenceData = useSelector(
    (state: RootState) => state.userResume.references
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Reference" />
      {ReferenceData.map((item) => (
        <ReferenceItem
          collegeCompanies={item.collegeCompanies}
          email={item.email}
          id={item.id}
          name={item.name}
          number={item.number}
          work={item.work}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Reference;
