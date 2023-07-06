import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import AchievementsItem from "./AchievementsItem";

const Achievements: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Achievements" />
      <AchievementsItem />
    </div>
  );
};

export default Achievements;
