import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import ExtraCurricularItem from "./ExtraCurricularItem";

const ExtraCurricular: React.FC = () => {
  const ExtraCurricularData = useSelector(
    (state: RootState) => state.userResume.poraec
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Extra Curricular" />
      {ExtraCurricularData.map((item) => (
        <ExtraCurricularItem
          description={item.description}
          name={item.name}
          time={item.time}
          under={item.under}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ExtraCurricular;
