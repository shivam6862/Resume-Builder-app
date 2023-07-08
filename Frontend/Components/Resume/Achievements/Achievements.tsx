import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import AchievementsItem from "./AchievementsItem";

const Achievements: React.FC = () => {
  const AchievementsData = useSelector(
    (state: RootState) => state.userResume.asaa
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Achievements" />
      {AchievementsData.map((item) => (
        <AchievementsItem item={item.item} id={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default Achievements;
