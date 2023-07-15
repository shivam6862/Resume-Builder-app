import React from "react";
import Style from "../Styles/Resume.module.css";
import AreasOfInterest from "./Resume/AreasOfInterest/AreasOfInterest";
import EducationDetails from "./Resume/EducationDetails/EducationDetails";
import ContactDetails from "./Resume/ContactDetails/ContactDetails";
import InternshipDetails from "./Resume/InternshipDetails/InternshipDetails";
import JobExperience from "./Resume/JobExperience/JobExperience";
import Projects from "./Resume/Projects/Projects";
import Achievements from "./Resume/Achievements/Achievements";
import Skills from "./Resume/Skills/Skills";
import ExtraCurricular from "./Resume/ExtraCurricular/ExtraCurricular";
import Publications from "./Resume/Publications/Publications";
import Reference from "./Resume/Reference/Reference";

interface CurrentProps {
  current: number;
}

interface ResumePage {
  Component: React.FC;
}

const Resume: React.FC<CurrentProps> = ({ current }) => {
  const ResumePages: ResumePage[] = [
    { Component: AreasOfInterest },
    { Component: EducationDetails },
    { Component: ContactDetails },
    { Component: InternshipDetails },
    { Component: JobExperience },
    { Component: Projects },
    { Component: Achievements },
    { Component: Skills },
    { Component: ExtraCurricular },
    { Component: Publications },
    { Component: Reference },
  ];
  const CurrentComponent = ResumePages[current]?.Component;

  return (
    <div className={Style.container_Resume}>
      {CurrentComponent && <CurrentComponent />}
    </div>
  );
};

export default Resume;
