import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InternshipDetailsItem from "./InternshipDetailsItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

const InternshipDetails: React.FC = () => {
  const InternshipDetailsData = useSelector(
    (state: RootState) => state.userResume.InternshipDetails
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Internship Details" />
      {InternshipDetailsData.map((item) => (
        <InternshipDetailsItem
          title={item.Title}
          company={item.Company}
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

export default InternshipDetails;
