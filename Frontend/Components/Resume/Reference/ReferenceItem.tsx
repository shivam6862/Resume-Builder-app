import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface ReferenceItemProps {
  collegeCompanies: string;
  email: string;
  id: string;
  name: string;
  number: string;
  work: string;
}

const ReferenceItem: React.FC<ReferenceItemProps> = ({
  collegeCompanies,
  email,
  id,
  name,
  number,
  work,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Referee <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={name}
              id={id}
              page={"references"}
              where={"name"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Designation <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={work}
              id={id}
              page={"references"}
              where={"work"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Instiute <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={collegeCompanies}
              id={id}
              page={"references"}
              where={"collegeCompanies"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Phone <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={number}
              id={id}
              page={"references"}
              where={"number"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Email <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={email}
              id={id}
              page={"references"}
              where={"email"}
            />
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Reference"} findIn={"references"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ReferenceItem;
