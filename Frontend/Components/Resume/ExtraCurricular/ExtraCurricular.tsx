import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import ExtraCurricularItem from "./ExtraCurricularItem";

const ExtraCurricular: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Extra Curricular" />
      <ExtraCurricularItem />
    </div>
  );
};

export default ExtraCurricular;
