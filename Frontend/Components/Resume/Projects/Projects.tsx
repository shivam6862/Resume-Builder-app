import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import ProjectsItem from "./ProjectsItem";

const Projects: React.FC = () => {
  return (
    <div className={Style.container}>
      <Heading heading="Projects" />
      <ProjectsItem />
    </div>
  );
};

export default Projects;
