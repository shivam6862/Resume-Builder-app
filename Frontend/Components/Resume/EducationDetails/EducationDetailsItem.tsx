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
            <InputArea
              type="text"
              value={year}
              id={id}
              page={"education"}
              where={"year"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Institute
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={institution}
              id={id}
              page={"education"}
              where={"institution"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>Field</div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={field}
              id={id}
              page={"education"}
              where={"field"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Degree
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={degree}
              id={id}
              page={"education"}
              where={"degree"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>Graduation</div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={graduation}
              id={id}
              page={"education"}
              where={"graduation"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Grades
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={cgpa}
              id={id}
              page={"education"}
              where={"cgpa"}
            />
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Education detail"} findIn={"education"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsItem;
