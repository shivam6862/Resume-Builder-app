import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import AchievementsItem from "./AchievementsItem";

const Achievements: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Achievements" />
      <AchievementsItem />
    </div>
  );
};

export default Achievements;
