import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";
const AchievementsItem: React.FC = () => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.achievement}>
          Achievement
          <div className={Style.compulsory}>*</div>
        </div>
        <div className={Style.input}>
          <InputArea />
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Achievements"} />
        </div>
      </div>
    </div>
  );
};

export default AchievementsItem;
