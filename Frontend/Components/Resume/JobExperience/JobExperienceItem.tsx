import React from "react";
import Style from "../../../Styles/Resume.module.css";
import classes from "../../../Styles/InputArea.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface JobExperiencesProps {
  position: string;
  organisation: string;
  description: string;
  startDate: string;
  endDate: string;
  id: string;
}

const JobExperienceItem: React.FC<JobExperiencesProps> = ({
  position,
  organisation,
  description,
  startDate,
  endDate,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Position
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={position}
              id={id}
              page={"JobExperience"}
              where={"Position"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Organisation
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              value={organisation}
              id={id}
              page={"JobExperience"}
              where={"Organisation"}
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
              value={description}
              id={id}
              page={"JobExperience"}
              where={"Description"}
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
          <SaveButton
            page={"Job experience"}
            findIn={"JobExperience"}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default JobExperienceItem;
