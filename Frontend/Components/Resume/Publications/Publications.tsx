import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import PublicationsItem from "./PublicationsItem";

const Publications: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Publications" />
      <PublicationsItem />
    </div>
  );
};

export default Publications;
