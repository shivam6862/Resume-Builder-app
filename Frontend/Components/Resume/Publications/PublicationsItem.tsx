import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const PublicationsItem: React.FC = () => {
  const PublicationsItemData = [
    "Title",
    "Authors",
    "Publisher",
    "Year",
    "Pages",
    "Volumes",
    "Journal",
  ];
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        {PublicationsItemData.map((item, index) => (
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
          <SaveButton />
        </div>
      </div>
    </div>
  );
};

export default PublicationsItem;
