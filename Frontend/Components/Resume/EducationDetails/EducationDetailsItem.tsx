import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface EducationDetailsItemProps {
  institution: string;
  year: string;
  degree: string;
  cgpa: string;
  id: string;
  field: string;
  graduation: string;
}

const EducationDetailsItem: React.FC<EducationDetailsItemProps> = ({
  institution,
  year,
  field,
  degree,
  cgpa,
  graduation,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Year
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={year} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Institute
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={institution} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>Field</div>
          <div className={Style.input}>
            <InputArea value={field} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Degree
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={degree} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Graduation
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={graduation} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Grades
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={cgpa} id={id} page={"education"} />
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Education detail"} />
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsItem;
