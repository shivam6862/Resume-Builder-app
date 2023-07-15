import React, { useState } from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import InputArea from "../../InputArea";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import SaveButton from "../../SaveButton";
import UploadImage from "../../UploadImage";

interface ContactDetailsProps {
  general: {
    name: string;
    college: string;
    branch: string;
    semester: string;
    email: string;
    number: string;
    registration: string;
  };
}

const ContactDetails: React.FC = () => {
  const ContactDetailsHeading = {
    name: "Name of the Person",
    college: "Institute Name",
    branch: "branch",
    semester: "semester no",
    registration: "Registration ID:",
    email: "Institute Webmail Address",
    number: "Personal contact number",
  };
  const ContactDetailsData = useSelector(
    (state: RootState) => state.userResume.general
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Contact Details" />
      <div className={Style.container_item}>
        <div className={Style.box_item}>
          <UploadImage />
          {Object.entries(ContactDetailsData).map(([key, value]) => (
            <div className={Style.combine_Item} key={key}>
              <div className={Style.achievement}>
                {
                  ContactDetailsHeading[
                    key as keyof typeof ContactDetailsHeading
                  ]
                }
              </div>
              <div className={Style.input}>
                <InputArea
                  type="text"
                  value={value}
                  id={key}
                  page={"general"}
                  where={key}
                />
              </div>
            </div>
          ))}
          <div className={Style.submit}>
            <SaveButton page={"Contact details"} findIn={"general"} id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
