import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const Skills: React.FC = () => {
  const SkillsData = [
    "Computer Languages",
    "Software Packages",
    "Additional Courses",
    "Languages Known",
  ];
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Skills" />
      <div className={Style.container_item}>
        <div className={Style.box_item}>
          {SkillsData.map((item, index) => (
            <div className={Style.combine_Item} key={index}>
              <div className={Style.achievement}>{item}</div>
              <div className={Style.input}>
                <InputArea />
              </div>
            </div>
          ))}
          <div className={Style.submit}>
            <SaveButton page={"Skills"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
