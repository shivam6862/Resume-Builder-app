import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";

const ContactDetails: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Contact Details" />
    </div>
  );
};

export default ContactDetails;
