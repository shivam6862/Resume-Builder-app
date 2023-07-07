import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const ReferenceItem: React.FC = () => {
  const ReferenceItemData = [
    "Referee",
    "Designation",
    "Instiute",
    "Phone",
    "Email",
  ];
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        {ReferenceItemData.map((item, index) => (
          <div className={Style.combine_Item} key={index}>
            <div className={Style.achievement}>
              {item} <div className={Style.compulsory}>*</div>
            </div>
            <div className={Style.input}>
              <InputArea />
            </div>
          </div>
        ))}
        <div className={Style.submit}>
          <SaveButton page={"Reference"} />
        </div>
      </div>
    </div>
  );
};

export default ReferenceItem;
