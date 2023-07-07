import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const ContactDetails: React.FC = () => {
  const ContactDetailsData = [
    "Personal contact no",
    "Permanent contact no",
    "Personal Webmail Address",
    "Institute Webmail Address",
    "Skype ID:",
  ];
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Contact Details" />
      <div className={Style.container_item}>
        <div className={Style.box_item}>
          {ContactDetailsData.map((item, index) => (
            <div className={Style.combine_Item} key={index}>
              <div className={Style.achievement}>{item}</div>
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
    </div>
  );
};

export default ContactDetails;
