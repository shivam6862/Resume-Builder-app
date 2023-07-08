import React from "react";
import Style from "../../../Styles/Resume.module.css";
import Heading from "../Heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import PublicationsItem from "./PublicationsItem";

const Publications: React.FC = () => {
  const PublicationsData = useSelector(
    (state: RootState) => state.userResume.Publications
  );
  return (
    <div className={Style.container_ResumePart}>
      <Heading heading="Publications" />
      {PublicationsData.map((item) => (
        <PublicationsItem
          authors={item.Authors}
          journal={item.Journal}
          pages={item.Pages}
          publisher={item.Publisher}
          title={item.Title}
          volumes={item.Volumes}
          year={item.Year}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Publications;
