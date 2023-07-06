import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";

const AreasOfInterest: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Areas Of Interest" />
    </div>
  );
};

export default AreasOfInterest;
