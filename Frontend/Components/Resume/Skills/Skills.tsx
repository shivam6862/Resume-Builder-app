import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InputArea from "../../InputArea";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import SaveButton from "../../SaveButton";

interface SkillsProps {
  skills: {
    computerLanguages: string;
    softwarePackages: string;
    additionalCourses: string;
    languagesKnown: string;
  };
}

const Skills: React.FC = () => {
  const SkillsDataHeading = {
    computerLanguages: "Computer Languages",
    softwarePackages: "Software Packages",
    additionalCourses: "Additional Courses",
    languagesKnown: "Languages Known",
  };

  const SkillsData = useSelector((state: RootState) => state.userResume.skills);
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Skills" />
      <div className={Style.container_item}>
        <div className={Style.box_item}>
          {Object.entries(SkillsData).map(([key, value]) => (
            <div className={Style.combine_Item} key={key}>
              <div className={Style.achievement}>
                {SkillsDataHeading[key as keyof typeof SkillsDataHeading]}
              </div>
              <div className={Style.input}>
                <InputArea value={value} id={key} page={"skills"} where={key} />
              </div>
            </div>
          ))}
          <div className={Style.submit}>
            <SaveButton page={"Skills"} findIn={"skills"} id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
