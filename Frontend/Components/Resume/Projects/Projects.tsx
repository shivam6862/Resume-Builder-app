import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import ProjectsItem from "./ProjectsItem";

const Projects: React.FC = () => {
  const ProjectsData = useSelector(
    (state: RootState) => state.userResume.projects
  );
  console.log(ProjectsData);
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Projects" />
      {ProjectsData.map((item) => (
        <ProjectsItem
          name={item.name}
          description={item.description}
          time={item.time}
          under={item.under}
          startDate={item.startDate}
          endDate={item.endDate}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Projects;
