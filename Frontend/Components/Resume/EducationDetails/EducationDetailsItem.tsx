import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const EducationDetailsItem: React.FC = () => {
  const EducationDetailsItemData = [
    "Year",
    "Institute",
    "Field",
    "Degree",
    "Graduation",
    "Grades",
  ];
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        {EducationDetailsItemData.map((item, index) => (
          <div className={Style.combine_Item} key={index}>
            <div className={Style.achievement}>
              {item}
              <div className={Style.compulsory}>*</div>
            </div>
            <div className={Style.input}>
              <InputArea />
            </div>
          </div>
        ))}
        <div className={Style.submit}>
          <SaveButton page={"Education detail"} />
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsItem;
