import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface AchievementsItemProps {
  item: string;
  id: string;
}

const AchievementsItem: React.FC<AchievementsItemProps> = ({ item, id }) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.achievement}>
          Achievement
          <div className={Style.compulsory}>*</div>
        </div>
        <div className={Style.input}>
          <InputArea value={item} id={id} page={"asaa"} where={"item"} />
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Achievements"} findIn={"asaa"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default AchievementsItem;
