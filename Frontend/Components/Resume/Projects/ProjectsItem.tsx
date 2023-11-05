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
  link: string;
  id: string;
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({
  name,
  description,
  time,
  under,
  startDate,
  endDate,
  link,
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
            <InputArea
              type="text"
              value={name}
              id={id}
              page={"projects"}
              where={"name"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Industry/Institution
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={under}
              id={id}
              page={"projects"}
              where={"under"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Description
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={description}
              id={id}
              page={"projects"}
              where={"description"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>Link</div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={link}
              id={id}
              page={"projects"}
              where={"link"}
            />
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
                  <InputArea
                    type="date"
                    value={startDate}
                    id={id}
                    page={"projects"}
                    where={"startDate"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>End Date</div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <InputArea
                    type="date"
                    value={endDate}
                    id={id}
                    page={"projects"}
                    where={"endDate"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Project"} findIn={"projects"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
