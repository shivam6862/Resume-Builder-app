import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface AreaOfInterestItemProps {
  item: string;
  id: string;
}

const AreasOfInterestitem: React.FC<AreaOfInterestItemProps> = ({
  item,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.achievement}>Areas Of Interest</div>
        <div className={Style.input}>
          <InputArea value={item} id={id} page={"aoi"} where={"item"} />
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Areas of interest"} findIn={"aoi"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default AreasOfInterestitem;
