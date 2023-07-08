import React from "react";
import Style from "../../../Styles/Resume.module.css";
import classes from "../../../Styles/InputArea.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface ProjectsItemProps {
  name: string;
  description: string;
  time: string;
  under: string;
  startDate: string;
  endDate: string;
  id: string;
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({
  name,
  description,
  time,
  under,
  startDate,
  endDate,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Title
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={name} id={id} page={"projects"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Industry/Institution
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={under} id={id} page={"projects"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Description
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={description} id={id} page={"projects"} />
          </div>
        </div>
        <div
          style={{
            width: "-webkit-fill-available",
            display: "flex",
            gap: "2rem",
          }}
        >
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>
              Start Date
              <div className={Style.compulsory}>*</div>
            </div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <input type="date" value={startDate} id={id} />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>End Date</div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <input type="date" value={endDate} id={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Project"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
