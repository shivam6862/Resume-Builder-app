import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const AreasOfInterest: React.FC = () => {
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Areas Of Interest" />
      <div className={Style.container_item}>
        <div className={Style.box_item}>
          <div className={Style.achievement}>Areas Of Interest</div>
          <div className={Style.input}>
            <InputArea />
          </div>
          <div className={Style.extraData} style={{ fontSize: "1rem" }}>
            Press enter to add multiple Interest
          </div>
          <div className={Style.submit}>
            <SaveButton page={"Areas of interest"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasOfInterest;
