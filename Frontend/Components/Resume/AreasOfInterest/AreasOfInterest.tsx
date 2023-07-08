import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import AreasOfInterestitem from "./AreasOfInterestitem";

const AreasOfInterest: React.FC = () => {
  const AreasOfInterestData = useSelector(
    (state: RootState) => state.userResume.aoi
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Areas Of Interest" />
      {AreasOfInterestData.map((item) => (
        <AreasOfInterestitem item={item.item} id={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default AreasOfInterest;
