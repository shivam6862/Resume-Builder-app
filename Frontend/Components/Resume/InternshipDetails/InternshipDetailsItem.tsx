import React from "react";
import Style from "../../../Styles/Resume.module.css";
import classes from "../../../Styles/InputArea.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface InternshipDetailsProps {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  id: string;
}

const InternshipDetailsItem: React.FC<InternshipDetailsProps> = ({
  title,
  company,
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
            Company
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={company}
              id={id}
              page={"InternshipDetails"}
              where={"Company"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Title
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={title}
              id={id}
              page={"InternshipDetails"}
              where={"Title"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>Description</div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={description}
              id={id}
              page={"InternshipDetails"}
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
                  <InputArea
                    type="date"
                    value={startDate}
                    id={id}
                    page={"InternshipDetails"}
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
                    page={"InternshipDetails"}
                    where={"endDate"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton
            page={" Internship detail"}
            findIn={"InternshipDetails"}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailsItem;
